async function callApi(){
    let api = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=5e98699f050446bc9be4c5e9d95d992b";
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
    let news = await callApi();
    console.log(news);
    let html = '<h1>CRYPTOXs NEWS</h1>';
    news.articles.map((newss,id)=>{
        html+=`<a href = ${newss.url} class="news">
                <div class="inside">
                <img class="img-thumbnail" src = ${newss.urlToImage} width=250 height = 250 />
                <div class="text">  
                <span>${newss.title}</span>
                <p>${newss.description}</p>
                </div> 
                </div>
                </a>`
    })
    let ne = document.querySelector('.news');
    ne.innerHTML = html;
}

renderPrices();