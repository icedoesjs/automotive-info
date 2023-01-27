// Not used due to no images, I could not find a good design without images
let Parser = require('rss-parser');
let parser = new Parser();

export default async function getRss() {
    let feed = await parser.parseURL('https://www.caranddriver.com/rss/all.xml/');

    let allPosts = [];
    feed.items.forEach(async item => {
        // This is unused currently, but I need to figure out how to scrape images from the page to complete this design.
        item.image = "https://i.pinimg.com/280x280_RS/43/22/9c/43229c70b98eae0e291a1c43bfeef2c7.jpg"
        allPosts.push(item)
    });

    return allPosts
}