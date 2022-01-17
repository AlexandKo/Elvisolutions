package ae.solidbase.interview.acceptance;

import ae.solidbase.interview.user.model.User;
import ae.solidbase.interview.user.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;

import java.time.LocalDate;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class UserServiceTest {
    @Autowired
    private UserService userService;

    @Test
    public void addNewUser() {
        User user = userService.saveUser(createUser());
        User userAfterSave = getUserById(user.getId());
        assertThat(userAfterSave)
                .isNotEqualTo(null)
                .matches(m -> m.getName().equals("Name"))
                .matches(m -> m.getPhone().equals("29123456"));
    }

    @Test
    public void deleteUser() {
        userService.deleteUserById(15L);
        User userAfterDelete = getUserById(15L);
        assertThat(userAfterDelete)
                .isNotEqualTo(null)
                .matches(m -> m.getName() == null)
                .matches(m -> m.getPhone() == null);
    }

    @Test
    public void updateUser() {
        User userForUpdate = createUser();
        userForUpdate.setId(1L);
        userService.saveUser(userForUpdate);
        User userAfterUpdate = userService.getUserById(1L);
        assertThat(userAfterUpdate)
                .isNotEqualTo(null)
                .matches(m -> m.getName().equals("Name"))
                .matches(m -> m.getPhone().equals("29123456"));
    }

    @Test
    public void getUserList_PageSize_15_Page_4() {
        Page<User> userList = userService.getUsers(15, 4);
        assertThat(userList)
                .isNotEqualTo(null)
                .matches(u -> u.getContent().size() == 15)
                .matches(u -> u.getPageable().getPageSize() == 15)
                .matches(u -> u.getPageable().getPageNumber() == 4);
    }

    @Test
    public void getUserList_PageSize_50_Page_3() {
        Page<User> userList = userService.getUsers(50, 3);
        assertThat(userList)
                .isNotEqualTo(null)
                .matches(u -> u.getContent().size() == 50)
                .matches(u -> u.getPageable().getPageSize() == 50)
                .matches(u -> u.getPageable().getPageNumber() == 3);
    }

    @Test
    public void getUserById_205() {
        User user = userService.getUserById(205L);
        assertThat(user)
                .isNotEqualTo(null)
                .matches(u -> u.getName() != null)
                .matches(u -> u.getPhone() != null);
    }

    @Test
    public void getUserById_0_Error_Id_NotExists() {
        User user = userService.getUserById(0);
        assertThat(user)
                .isNotEqualTo(null)
                .matches(u -> u.getName() == null)
                .matches(u -> u.getPhone() == null);
    }

    private User getUserById(long id) {
        return userService.getUserById(id);
    }

    private User createUser() {
        return User.builder()
                .name("Name")
                .surname("Surname")
                .birthDate(LocalDate.now())
                .email("test@test.com")
                .password("password")
                .phone("29123456")
                .identity("000-00-0000")
                .passportNumber("456789")
                .build();
    }
}