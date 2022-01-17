package ae.solidbase.interview.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SortModel {
    @JsonProperty(value="unsorted")
    private Boolean unsorted;
    @JsonProperty(value="sorted")
    private Boolean sorted;
    @JsonProperty(value="empty")
    private Boolean empty;

    public void setUnsorted(Boolean unsorted) {
        this.unsorted = unsorted;
    }

    public void setSorted(Boolean sorted) {
        this.sorted = sorted;
    }

    public void setEmpty(Boolean empty) {
        this.empty = empty;
    }
}