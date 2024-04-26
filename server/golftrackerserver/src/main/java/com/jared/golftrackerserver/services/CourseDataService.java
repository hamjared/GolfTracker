package com.jared.golftrackerserver.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.SortedMap;
import java.util.TreeMap;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.jared.golftrackerserver.endpoints.responses.CourseResponse;
import com.jared.golftrackerserver.endpoints.responses.Hole;
import com.jared.golftrackerserver.endpoints.responses.Tee;

public class CourseDataService {

    public static CourseResponse scrapeCourseData(String url) throws IOException {

        Document doc = Jsoup
        .connect(url)
        .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36") 
        .header("Accept-Language", "*")
        .get();

        CourseResponse course = new CourseResponse();

        Elements courseNameElems =  doc.selectXpath("//div[@id='gcscorecard']//div[@class='title']");
        String courseName = courseNameElems.get(0).text().replaceAll("Scorecard", "").trim();

        course.setName(courseName);

        Elements tableElements = doc.selectXpath("//div[@id='gcscorecard']//tbody");

        Map<String, Tee> teeNameToTee = new HashMap<>();
        Elements teeElements = tableElements.get(0).selectXpath("//tr[@class]");
        for (Element teeElem : teeElements) {
            Tee tee = new Tee();

            tee.setName(teeElem.attr("class"));

            Elements teeAttributes = teeElem.selectXpath("//td[@class='nums']/p");

            tee.setRating(Double.parseDouble(teeAttributes.get(1).text()));
            tee.setSlope(Double.parseDouble(teeAttributes.get(2).text()));

            teeNameToTee.put(tee.getName(), tee);

        }

        course.setTeeNameToTee(teeNameToTee);

        Elements groupOf9Holes = new Elements();
        for (int i = 1; i < tableElements.size(); i++)
        {
            groupOf9Holes.add(tableElements.get(i));
        }

        Map<String, List<Integer>> teeNameToListOfHoleYardages = new HashMap<>();
        Map<String, List<Integer>> teeNamesToListOfHolePars = new HashMap<>();
        Map<String, List<Integer>> teeNamesToListOfHoleHandicaps = new HashMap<>();
        for (Element nineHoleGroup : groupOf9Holes) {
            for (String teeName : teeNameToTee.keySet()) {
                if (teeNameToListOfHoleYardages.get(teeName) == null){
                    teeNameToListOfHoleYardages.put(teeName, new ArrayList<>());
                    teeNamesToListOfHolePars.put(teeName, new ArrayList<>());
                    teeNamesToListOfHoleHandicaps.put(teeName, new ArrayList<>());
                }

                Elements holeYardages = nineHoleGroup.select(String.format("tr[class='%s']", teeName)).select("td[class='nums']").select("p");
                for (Element yardageElem : holeYardages) {
                    teeNameToListOfHoleYardages.get(teeName).add(Integer.parseInt(yardageElem.text()));
                }

                Elements holePars = nineHoleGroup.select("td[style='border-bottom:solid 3px #000;']").select("td[class='nums']").select("p");
                for (Element par : holePars) {
                    teeNamesToListOfHolePars.get(teeName).add(Integer.parseInt(par.text()));
                }

                Elements holeHandicaps = nineHoleGroup.select("td[style='background-color:#ddd;']").select("td[class='nums']").select("p");
                // Only loop through the first 9 results to avoid also adding the womens handicaps. 
                for (int i = 0; i < 9; i++) {
                    Element par = holeHandicaps.get(i);
                    teeNamesToListOfHoleHandicaps.get(teeName).add(Integer.parseInt(par.text()));
                }
            }
        }

        // Initialize the List of Holes. 
        int numHoles = 9 * groupOf9Holes.size();
        List<Hole> holes = new ArrayList<>(numHoles);
        for (int i = 0; i < numHoles; i++) {
            Hole hole = new Hole();
            holes.add(hole);
        }

        for (String teeName : teeNameToTee.keySet()) {
            List<Integer> holeYardages = teeNameToListOfHoleYardages.get(teeName);
            List<Integer> holePars = teeNamesToListOfHolePars.get(teeName);
            List<Integer> holeHandicaps = teeNamesToListOfHoleHandicaps.get(teeName);

            for (int i = 0; i < numHoles; i++) {
                Hole hole = holes.get(i);
                hole.getTeeNameToYardage().put(teeName, holeYardages.get(i));
                hole.getTeeNameToPar().put(teeName, holePars.get(i));
                hole.getTeeNameToHandicap().put(teeName,holeHandicaps.get(i));
            }
        }

        course.setHoles(holes);

        course.setId(course.getName().hashCode());
        course.setCourseURL(url);

        return course;
    }

}
