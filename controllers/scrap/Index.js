// const booking = require('./Booking');
// const hotel = require('./clearTrip');
// let wholeData = [];

// const Hotels = async (link1, link2) => {
//     console.log("Entered into data scrapping")
//     console.log(`link1 = ${link1} || link2 = ${link2}`)
//     let bookingData = booking.Try(link1);

//     bookingData.then((data) => {
//         let count=0;
//         data.forEach(element => {
//             element['website'] = "Booking.com";
//             wholeData.push(element)
//             count++;
//         });
//         console.log("data from booking site added successfully || added = "+count);
//         // console.log(`----------------------> controller file booking data`,);
//         // console.log(wholeData);
//     }).catch((err) => {
//         console.log("error occured in booking site");
//     })

//     let hotelData = hotel.Try(link2);
//     hotelData.then((data) => {
//         let count=0;
//         data.forEach(element => {
//             element['website'] = "Hotel.com"
//             wholeData.push(element)
//             count++;
//         });
//         console.log("data from hotel site added successfully || aaded = "+count);
//         // console.log(`----------------------> controller file hotels data`,);
//         // console.log(wholeData);
//     }).catch((err) => {
//         console.log("error occured in hotel site");
//     });

//     //console.log(wholeData);
//     Promise.all([bookingData, hotelData]).then(() => {
//         console.log(wholeData)
//         let data = wholeData;
//         let sum = 0;
//         data.forEach((item) => {
//             let price = item['price'];
//             price = price.slice(2)
//             price = price.split(',');
//             price = price[0] + price[1];
//             console.log(price + " || " + item['price']);
//             let oprice;
//             oprice = parseInt(price);
//             item['price'] = parseInt(price);
//             sum += oprice;
//         })

//         let avg = sum / data.length;
//         avg = Math.floor(avg)
//         console.log("----------------------avg------------------");
//         console.log(avg);

//         let final = [];
//         data.forEach(ele => {
//             if (ele.price < avg) {
//                 final.push(ele)
//             }
//         });
//         console.log("---------------------------------------------------------------------------------F I N A L---------------");
//         //console.log(final);
//         return final;
//     })
// }


// module.exports = { Hotels }






