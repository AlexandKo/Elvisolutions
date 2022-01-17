package ae.solidbase.interview.user.service;

import ae.solidbase.interview.user.model.User;
import ae.solidbase.interview.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private static final String ID = "id";
    private final UserRepository userRepository;

    public Page<User> getUsers(int size, int page) {
        return userRepository.findAll(PageRequest.of(page, size, Sort.by(ID).ascending()));
    }

    public User getUserById(long id) {
        Optional<User> userOptional = userRepository.findById(id);
        return userOptional.orElse(new User());
    }

    public void deleteUserById(long id) {
        userRepository.deleteById(id);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Page<User> searchUser(int size, int page, String search) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(ID).ascending());
        return userRepository.searchUser(search, pageable);
    }
}