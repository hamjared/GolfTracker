package com.jared.golftrackerserver.endpoints.responses;

import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {

    private int id;
    private String courseURL;
    private String name;
    private List<Hole> holes;
    private Map<String, Tee> teeNameToTee;

}
