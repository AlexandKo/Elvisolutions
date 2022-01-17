package ae.solidbase.interview.model;

import ae.solidbase.interview.user.model.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class UserModel {
    @JsonProperty(value = "content")
    private List<User> users;
    @JsonProperty(value = "pageable")
    private PageModel pageModel;
    @JsonProperty(value = "totalElements")
    private int totalElements;
    @JsonProperty(value = "totalPages")
    private int totalPages;
    @JsonProperty(value = "last")
    private boolean last;
    @JsonProperty(value = "size")
    private int size;
    @JsonProperty(value = "number")
    private int number;
    @JsonProperty(value = "sort")
    private SortModel sortModel;
    @JsonProperty(value = "numberOfElements")
    private int numberOfElements;
    @JsonProperty(value = "first")
    private boolean first;
    @JsonProperty(value = "empty")
    private boolean empty;

    public List<User> getUsers() {
        return users;
    }
}