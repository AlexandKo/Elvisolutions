package ae.solidbase.interview.user.repository;

import ae.solidbase.interview.user.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * FROM USERS WHERE CONCAT(name,surname,phone) LIKE CONCAT('%',:search,'%')", nativeQuery = true)
    Page<User> searchUser(@Param("search") String searchRequest, Pageable pageable);
}
