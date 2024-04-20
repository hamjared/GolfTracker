import puppeteer from "puppeteer";

export async function getCourseData(url: string) {

    console.log("In get course data function")

      // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://www.greenskeeper.org/colorado/Denver_North_Boulder_Fort_Collins/riverdale_golf_course_dunes/scorecard.cfm", {
    waitUntil: "domcontentloaded",
  });

}