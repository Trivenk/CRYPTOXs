// let stocks = ["IBM","TCS","TSCO.LON","SHOP.TRT","GPV.TRV","DAI.DEV","RELIANCE.BSE","600104.SHH","000002.SHZ"]

// async function callApi(){
//     console.log(stocks[0]);
//         let api = "https://yfapi.net/v6/finance/quote?region=IN&lang=en&symbols=INR";
//         try{
//             let result = await fetch(api);
//             // console.log(result);
//             return await result.json();
//         }
//         catch(err)
//         {
//             console.log(err);
//         }
// }

// async function renderPrices()
// {
//     let price = await callApi();
//     console.log(price);

// }
// renderPrices();