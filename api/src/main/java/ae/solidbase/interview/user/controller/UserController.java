package ae.solidbase.interview.user.controller;

import ae.solidbase.interview.user.model.User;
import ae.solidbase.interview.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.ws.rs.core.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Tag(name = "User Controller", description = "Base CRUD functions")
public class UserController {
    private static final String DEFAULT_PAGE_SIZE = "10";
    private static final String DEFAULT_PAGE_NUMBER = "0";
    private final UserService userService;

    @GetMapping(value = "api/user/get/page")
    @Operation(summary = "Get users list")
    public Page<User> getUsersPage(@RequestParam(defaultValue = DEFAULT_PAGE_SIZE) int size,
                                   @RequestParam(defaultValue = DEFAULT_PAGE_NUMBER) int page) {
        return userService.getUsers(size, page);
    }

    @GetMapping(value = "api/user/get/{id}")
    @Operation(summary = "Get user by Id")
    public User getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @DeleteMapping(value = "api/user/delete/{id}")
    @Operation(summary = "Delete user by Id")
    public Response deleteUserById(@PathVariable long id) {
        userService.deleteUserById(id);
        return Response.ok().build();
    }

    @PostMapping(value = "api/user/add")
    @Operation(summary = "Add new user")
    public User addNewUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping(value = "api/user/update")
    @Operation(summary = "Update user record")
    public User updateUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping(value = "api/user/search/")
    @Operation(summary = "Search users by name, surname or phone number")
    public Page<User> searchUsers(@RequestParam(defaultValue = DEFAULT_PAGE_SIZE) int size,
                                  @RequestParam(defaultValue = DEFAULT_PAGE_NUMBER) int page,
                                  @RequestParam String search) {
        return userService.searchUser(size, page, search);
    }
}