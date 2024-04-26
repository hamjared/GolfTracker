package com.jared.golftrackerserver.endpoints;

import org.springframework.web.bind.annotation.RestController;

import com.jared.golftrackerserver.endpoints.responses.CourseResponse;
import com.jared.golftrackerserver.services.CourseDataService;

import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

// Use default CrossOrigin annoation to allow all for all Mappings in this class. 
@CrossOrigin()
@RestController("/coursedata")
public class CourseDataController {

    /**
     * 
     * @param courseUrl the url of the course on /www.greenskeeper.org
     * @return a Course object containing course details. 
     * @throws IOException 
     */
    @GetMapping("/scrape")
    public CourseResponse scrape(@RequestParam String url) {
        try {
			return CourseDataService.scrapeCourseData(url);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
            return null;
		}
    }

}
