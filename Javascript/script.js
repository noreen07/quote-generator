const quotes = [
{
    name:'Walt Disney',
    quote: 'All our dreams can come true, if we have the courage to pursue them.'
},
{
    name:'Steve Jobs',
    quote: 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.'
},
{
    name:'Noreen',
    quote: 'There is no time like the present. So just start and you will realize that you are halfway there!'
},
{
    name:'Amelia Earhart ',
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.'
},
{
    name:'Carl Bard',
    quote: 'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.'
},
{
    name:'Jim Rohn',
    quote: 'When you know what you want, and want it bad enough, you’ll find a way to get it.'
},
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthoer = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
    let number = Math.floor(Math.random() * quotes.length)
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}