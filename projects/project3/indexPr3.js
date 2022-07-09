console.log("this is my indexpr3.js ")
// my api key  048ee9649f8b4bbb928e5673a74da1d0

//intilizing the api element
let apiKey = "048ee9649f8b4bbb928e5673a74da1d0"

const xhr = new XMLHttpRequest()
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true)

xhr.onload = function () {
    if (this.status == 200) {
        let NewsPage = document.getElementById('accordionExample')
        let html = ""
        let JS = JSON.parse(this.responseText)
        // console.log(JS.articles)

        let news = JS.articles
        console.log(news)

        news.forEach(function (element,index) {
            //in this class = text-muted text-truncate"  is use for hide the overflow text
            let cont = `<div class="card newsCard my-3   text-muted text-truncate"  ">
                            <div class="card-header" id="heading${index}">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                <div id="innerTitle${index}">
                                    <b>Breaking News ${index+1}:</b> ${element["title"] }
                                
                                </div>
                                </button>
                            </h5>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionExample">
                            <div class="card-body" id="innerDescription${index}">
                             ${element.description} <a href ="${element.url}" target="_blank"> Read More </a>
                            </div>
                            </div>
                        </div>`

            html += cont

        });

        NewsPage.innerHTML=html

    }

    else{
        console.log("some error occured")
    }

}



xhr.send()
// let searchBtn = document.getElementById("searchBtn")
let searchTxt = document.getElementById("searchTxt")
let card = document.getElementsByClassName("newsCard")
// console.log(card)
searchTxt.addEventListener('input',()=>{
    let Value = searchTxt.value
    
    // let JS = JSON.parse(this.responseText)
        


    // console.log(NewsPage)
    
    Array.from(card).forEach((element,index)=>{
        let innerDescription = element.getElementById(`innerDescription${index}`).innerText
        let innerTitle = element.getElementById(`innerTitle${index}`).innerText
        if(innerDescription.includes(Value)||innerTitle.includes(Value))
        {
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none'
        }
        
    
    })
})