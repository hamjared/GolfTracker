package com.jared.golftrackerserver.endpoints.responses;

import java.util.HashMap;
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
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class Hole {
    private Map<String, Integer> teeNameToPar = new HashMap<>();
    private Map<String, Integer> teeNameToYardage = new HashMap<>();
    private Map<String, Integer> teeNameToHandicap = new HashMap<>();

}
