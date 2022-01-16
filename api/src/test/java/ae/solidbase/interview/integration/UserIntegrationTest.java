package ae.solidbase.interview.integration;

import ae.solidbase.interview.model.UserModel;
import ae.solidbase.interview.user.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.time.LocalDate;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class UserIntegrationTest extends MvcConfiguration {
    @Override
    @BeforeEach
    public void setUp() {
        super.setUp();
    }

    @Test
    public void getUserListFirstPage_DefaultPageSize_10_DefaultPage_0() throws Exception {
        String uri = "http://localhost:9090/api/user/get/page";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders
                        .get(uri)
                        .accept(MediaType.APPLICATION_JSON_VALUE))
                        .andReturn();

        String content = mvcResult.getResponse().getContentAsString();
        UserModel userList = super.mapFromJson(content, UserModel.class);
        assertThat(userList)
                .matches(u -> !(u.getUsers().isEmpty()))
                .matches(u -> u.getUsers().size() == 10)
                .matches(u -> u.getPageModel().getPageNumber() == 0);
    }

    @Test
    public void getUserListPage_PageSize_50_Page_3() throws Exception {
        String uri = "http://localhost:9090/api/user/get/page";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                        .param("size", "50")
                        .param("page", "3")
                        .accept(MediaType.APPLICATION_JSON_VALUE))
                        .andReturn();

        String content = mvcResult.getResponse().getContentAsString();
        UserModel userList = super.mapFromJson(content, UserModel.class);
        assertThat(userList)
                .matches(u -> !(u.getUsers().isEmpty()))
                .matches(u -> u.getUsers().size() == 50)
                .matches(u -> u.getPageModel().getPageNumber() == 3);
    }

    @Test
    public void getUserById() throws Exception {
        String uri = "http://localhost:9090/api/user/get/15";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders
                        .get(uri)
                        .accept(MediaType.APPLICATION_JSON_VALUE))
                        .andReturn();

        String content = mvcResult.getResponse().getContentAsString();
        User user = super.mapFromJson(content, User.class);
        assertThat(user)
                .isNotEqualTo(null)
                .matches(u -> u.getName() != null)
                .matches(u -> u.getPhone() != null);
    }

    @Test
    public void deleteUserById() throws Exception {
        String deleteUri = "http://localhost:9090/api/user/delete/15";
        mvc.perform(MockMvcRequestBuilders
                        .delete(deleteUri)
                        .accept(MediaType.APPLICATION_JSON_VALUE))
                        .andReturn();

        String uri = "http://localhost:9090/api/user/get/15";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders
                        .get(uri)
                        .accept(MediaType.APPLICATION_JSON_VALUE))
                        .andReturn();

        String content = mvcResult.getResponse().getContentAsString();
        User user = super.mapFromJson(content, User.class);
        assertThat(user)
                .isNotEqualTo(null)
                .matches(u -> u.getName() == null)
                .matches(u -> u.getPhone() == null);
    }

    @Test
    public void addUser() throws Exception {
        User newUser = createUser();
        String addUri = "http://localhost:9090/api/user/add";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders
                .post(addUri)
                .content(super.mapToJson(newUser))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        String content = mvcResult.getResponse().getContentAsString();
        User user = super.mapFromJson(content, User.class);

        String uri = "http://localhost:9090/api/user/get/" + user.getId();
        MvcResult mvcResultAfterSave = mvc
                .perform(MockMvcRequestBuilders
                        .get(uri)
                        .accept(MediaType.APPLICATION_JSON_VALUE))
                        .andReturn();

        String contentAfterSave = mvcResultAfterSave.getResponse().getContentAsString();
        User userAfterSave = super.mapFromJson(contentAfterSave, User.class);
        assertThat(userAfterSave)
                .isNotEqualTo(null)
                .matches(m -> m.getName().equals("Name"))
                .matches(m -> m.getPhone().equals("29123456"));
    }

    @Test
    public void updateUser() throws Exception {
        User newUser = createUser();
        newUser.setId(55L);
        String updateUri = "http://localhost:9090/api/user/update";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders
                        .put(updateUri)
                        .content(super.mapToJson(newUser))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_VALUE))
                        .andReturn();

        String content = mvcResult.getResponse().getContentAsString();
        User user = super.mapFromJson(content, User.class);

        String uri = "http://localhost:9090/api/user/get/" + user.getId();
        MvcResult mvcResultAfterUpdate = mvc
                .perform(MockMvcRequestBuilders
                        .get(uri)
                        .accept(MediaType.APPLICATION_JSON_VALUE))
                        .andReturn();

        String contentAfterUpdate = mvcResultAfterUpdate.getResponse().getContentAsString();
        User userAfterUpdate = super.mapFromJson(contentAfterUpdate, User.class);
        assertThat(userAfterUpdate)
                .isNotEqualTo(null)
                .matches(m -> m.getName().equals("Name"))
                .matches(m -> m.getPhone().equals("29123456"));
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