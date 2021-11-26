const quoteContainer = document.getElementById('quoteContainer');
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const newQuote = document.getElementById('new-quote')



async function getQuote(){
    const apiURL = 'https://forismatic-proxy.herokuapp.com/?lang=en&key=123456'

    try{
        const response = await fetch(apiURL)
        const data = await response.json()
        console.log(data)
        if(data.quoteText == undefined){
            getQuote()
        }
        else{
        
            quote.innerText = data.quoteText;
            author.innerText = data.quoteAuthor

        }
    }
    catch(error){
        getQuote()

    }
}

newQuote.addEventListener('click',getQuote)

getQuote()