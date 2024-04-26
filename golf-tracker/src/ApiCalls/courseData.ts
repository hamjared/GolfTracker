import { Course, defaultCourse } from "@/app/data/Course";
import { ServerSettingsType } from "@/app/data/ServerSettings";
import { SCRAPE_COURSE_FROM_URL } from "./endpoints";
import axios from "axios";


export async function scrapeCourseFromUrl(courseUrl: string, serverSettings: ServerSettingsType): Promise<Course> {
    const endpoint = "http://" + serverSettings.ip + ":" + serverSettings.port + SCRAPE_COURSE_FROM_URL

    let response = await axios.get(endpoint,
        {
            params: {
                url: courseUrl
            }
        })

    return response.data
}