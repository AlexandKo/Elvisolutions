package ae.solidbase.interview.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PageModel {
    @JsonProperty(value = "sort")
    private SortModel sortModel;
    @JsonProperty(value = "offset")
    private int offset;
    @JsonProperty(value = "pageSize")
    private int pageSize;
    @JsonProperty(value = "pageNumber")
    private int pageNumber;
    @JsonProperty(value = "paged")
    private Boolean paged;
    @JsonProperty(value = "unpaged")
    private Boolean unpaged;

    public int getPageNumber() {
        return pageNumber;
    }
}