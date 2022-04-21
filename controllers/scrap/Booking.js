

const puppeteer = require('puppeteer');


const Try = async (link1)=>{
    console.log("link 1 booking js started");
    let url = link1;
       let browser = await puppeteer.launch({
        headless: false,
        args: ["--no-sandbox"]
    });
    let page = await browser.newPage();
    await page.goto(url,{waitUntil: "networkidle0"});
    let hotels = await page.evaluate(() => {
        let items = document.querySelectorAll('.d20f4628d0');
        // return items.length;
        data = []
        items.forEach(item => {
          let name = null, HotelLink = null, image = null, reviews = null, price = null;
          if (item.querySelector(".fcab3ed991.a23c043802"))
            name = item.querySelector(".fcab3ed991.a23c043802").textContent;
          if (item.querySelector(".c90a25d457 a"))
            HotelLink = item.querySelector(".c90a25d457 a").href;
          if (item.querySelector(".c90a25d457 img"))
            image = item.querySelector(".c90a25d457 img").src;
          if (item.querySelector(".d8eab2cf7f.c90c0a70d3.db63693c62"))
            reviews = item.querySelector(".d8eab2cf7f.c90c0a70d3.db63693c62").textContent;
          if (item.querySelector("span.fcab3ed991.bd73d13072"))
            price = item.querySelector("span.fcab3ed991.bd73d13072").textContent
          data.push({ name, reviews,price,HotelLink, image, });
    
        })
        return data;
      });
    await browser.close();
    // console.log(hotels);
    return hotels
};
// let l = "https://www.booking.com/searchresults.en-gb.html?ss=Jaipur&ssne=Jaipur&ssne_untouched=Jaipur&label=hotels-english-en-india-8DW0FNCR9gZgfD3UQr1uBwS432876510917%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-11212371%3Alp9061665%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=484ebd9f4c4f7897af832a51617bfbc7&aid=309654&lang=en-gb&sb=1&src_elem=sb&src=searchresults&dest_id=-2098033&dest_type=city&checkin=2022-04-16&checkout=2022-04-17&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure"
// Try(l).then(d=> console.log("<><><><><>"+d.length));

module.exports={Try}