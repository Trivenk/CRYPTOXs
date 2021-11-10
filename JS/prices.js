async function callApi(){
    let api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";
    try{
        let result = await fetch(api);
        return await result.json();
    }
    catch(err)
    {
        console.log(err);
    }
}

async function renderPrices()
{
    let prices = await callApi();
    // console.log(prices);
    let html = `<table class="table table-striped" id="tab">
                <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Cryptocurrency</th>
                    <th>Price</th>
                    <th>24 Hrs % Changes </th>
                    <th>Market Cap</th>
                </tr>
                </thead>
                <tbody class="price" >`;
    prices.map((price,id)=>{
        console.log(price);
        let pricess = price.current_price.toFixed(2);
        let str = '$ ' + pricess;
        let change = price.price_change_percentage_24h.toFixed(2);
        let str1;
        let check = price.price_change_percentage_24h.toString().charAt(0);
        if(check === '-')
        str1 = change + ' %'+" 	&#8595;";
        else
        str1 = '+' + change + ' %'+" &#8593;";
        let colo = "green";
        if(check==='-')
        colo = "red";
        let market = parseInt(price.market_cap);
        let str2 = '$ '+ market;
        let str3 = price.symbol.toUpperCase();
        let htmlEle = `
                        <tr>
                            <td>${id+1}</td>
                            <td><img src="${price.image}" class="mx-3" width="25" height="25" >${price.name} <span style="color:gray" class="mx-3">${str3}</span></td>
                            <td>${str}</td>
                            <td style="color:${colo};  font-weight: bold;">${str1}</td>
                            <td>${str2}</td>
                        </tr>`
        html += htmlEle;
    })
    html += `</tbody>
            </table>`
    let cont = document.querySelector('.prices');
    cont.innerHTML = html;
}

renderPrices();