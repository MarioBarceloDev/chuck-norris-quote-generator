const quoteEl = document.getElementById('quote');
const quoteBtn = document.getElementById('quoteBtn');

quoteBtn = addEventListener('click', generateQuote);

generateQuote();

// Using async / await
async function generateQuote() {

    const response = await fetch('https://api.chucknorris.io/jokes/random');

    const data = await response.json();

    quoteEl.innerHTML = data.value;
    
}


/**
 * Using .then
 */
// fetch('https://api.chucknorris.io/jokes/random')
//     .then((response) => response.json() )
//     .then( data => {
//         quoteEl.innerHTML = data.value
//     })