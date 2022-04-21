const scrapData = require('./scrap/Index');
const booking = require('./scrap/Booking');
const hotel = require('./scrap/clearTrip');

const mainGet = async (req,res)=>{
    //res.render('./')
    res.sendFile('/index.html',{root:__dirname})
    // res.render('index.html')
}


const LinkPosted= async (req,res)=>{
    let link1 = req.body.link1;
    let link2 = req.body.link2;
    console.log("link1 = ",link1)
    console.log("link2 = ",link2)
    let wholeData=[]
    //data from booking.com
    let bookingData = booking.Try(link1);
    bookingData.then((data) => {
        let count=0;
        data.forEach(element => {
            element['website'] = "Booking.com";
            wholeData.push(element)
            count++;
        });
        console.log("data from booking site added successfully || added = "+count);
    }).catch((err) => {
        console.log("error occured in booking site");
    })

    //data from hotel.com
    let hotelData = hotel.Try(link2);
    hotelData.then((data) => {
        let count=0;
        data.forEach(element => {
            element['website'] = "Hotel.com"
            wholeData.push(element)
            count++;
        });
        console.log("data from hotel site added successfully || aaded = "+count);
    }).catch((err) => {
        console.log("error occured in hotel site");
    });

    Promise.all([bookingData, hotelData]).then(() => {
        // console.log(wholeData)
        let data = wholeData;
        let sum = 0;
        data.forEach((item) => {
            let price = item['price'];
            price = price.slice(2)
            price = price.split(',');
            price = price[0] + price[1];
            // console.log(price + " || " + item['price']);
            let oprice;
            oprice = parseInt(price);
            item['price'] = parseInt(price);
            sum += oprice;
        })

        let avg = sum / data.length;
        avg = Math.floor(avg)
        // console.log("----------------------avg------------------");
        // console.log(avg);

        let final = [];
        data.forEach(ele => {
            if (ele.price < avg) {
                final.push(ele)
            }
        });
        console.log(final)
        // res.send({"Message":"Finally data after all waiting",data:final})
        res.render('result.ejs',{data:final})
    })

    // await scrapData.Hotels(link1,link2)
    // .then((data)=>{
    //     res.send({
    //     data : data,
    //     message : "request successfull"
    //     })
    // })
    // console.log("executed");
   // console.log(`${link1}and ${link2}`);
    // res.redirect('/results')
}

const results = async(req,res)=>{
    res.send({"Message":"Something somethign"})
}

module.exports={mainGet,LinkPosted,results}