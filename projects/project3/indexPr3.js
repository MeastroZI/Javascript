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
        console.log(JS.articles)

        let news = JS.articles

        Array.from(news).forEach(function (element,index) {
            let cont = `<div class="card">
                            <div class="card-header" id="heading${index}">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                ${element["title"]}
                                </button>
                            </h5>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionExample">
                            <div class="card-body">
                             ${element.description}
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