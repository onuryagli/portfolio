const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("num.csv");
//write Headers
writeStream.write("");

request(
  "https://scholar.google.com/citations?user=DCDq2T0AAAAJ&hl=en",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const siteHeading = $(".gsc_rsb_std");
      let citeNum = siteHeading.html();
      console.log(citeNum);
      writeStream.write(`${citeNum}`);
    }
  }
);
console.log("Scraping Done");
