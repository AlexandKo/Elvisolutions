package ae.solidbase.interview.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SortModel {
    @JsonProperty(value="unsorted")
    private Boolean unsorted;
    @JsonProperty(value="sorted")
    private Boolean sorted;
    @JsonProperty(value="empty")
    private Boolean empty;
}