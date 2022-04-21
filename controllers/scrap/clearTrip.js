
const puppeteer = require('puppeteer');

let Try = async (link2) => {
    console.log("link 2 hotels js started");
    let url = link2;
    let browser = await puppeteer.launch({
        headless: false,
        args: ["--no-sandbox"]
    });
    let page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    let hotels = await page.evaluate(() => {
        let items = document.querySelectorAll("._3f26d2")
        let data = items[0].querySelectorAll("li")
        // return data.length;
        let some = [];
        data.forEach(item => {
            //let name = null;
            if(item.hasAttribute('data-hotel-id')){
                let name = null , price =null,reviews=null,HotelLink=null,image=null;
                if(item.querySelector("h2._3zH0kn"))
                    name = item.querySelector("h2._3zH0kn").textContent;
                if(item.querySelector("img"))   
                    image = item.querySelector("span img").src; 
                if(item.querySelector("span._2R4dw5"))
                    price = item.querySelector("span._2R4dw5").textContent;  
                if(item.querySelector("section span._1biq31"))
                    reviews = item.querySelector("section span._1biq31").textContent;      
                if(item.querySelector("a._61P-R0"))
                    HotelLink= "https://in.hotels.com"+item.querySelector("a._61P-R0").getAttribute("href");
                some.push({name,reviews,price,HotelLink,image});    
            } 
            // some.push(1)
        })
        return some;
    });
    await browser.close();
    // console.log(hotels);
    return hotels;

};

module.exports={Try};