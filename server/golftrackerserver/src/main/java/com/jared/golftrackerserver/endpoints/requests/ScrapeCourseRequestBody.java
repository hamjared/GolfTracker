package com.jared.golftrackerserver.endpoints.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScrapeCourseRequestBody {
    private String url;
}