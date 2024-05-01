import { Course, defaultCourse } from "@/app/data/Course";
import { ServerSettingsType } from "@/app/data/ServerSettings";
import { SCRAPE_COURSE_FROM_URL } from "./endpoints";
import axios from "axios";
import https from 'https'


export async function scrapeCourseFromUrl(courseUrl: string, serverSettings: ServerSettingsType): Promise<Course> {
    var http = "http://"
    if (serverSettings.isHttps)
    {
        http = "https://"
    } 

    var port = ""
    if (serverSettings.usePort)
        {
            port = ":" + serverSettings.port
        }
    const endpoint = http + serverSettings.ip + port + SCRAPE_COURSE_FROM_URL

  
    // At request level
    const agent = new https.Agent({  
        rejectUnauthorized: false
    });

    let response = await axios.get(endpoint,
        {
            params: {
                url: courseUrl
            },

            httpsAgent: agent 
        })

    return response.data
}