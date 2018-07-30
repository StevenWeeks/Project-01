// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  {quote:"The human race has one really effective weapon, and that is laughter.",
  source:"Mark Twain",
  tag:"Thought Provoking"},

  {quote:"The good thing about science is that it’s true whether or not you believe in it.",
  source:"Neil deGrasse Tyson",
  tag:"Facts"},

  {quote:"Life is like riding a bicycle. In order to maintain balance, you must keep moving.",
  source:"Albert Einstein",
  tag: "Motivate"},

  {quote:"If there was an observer on Mars, they would probably be amazed that we have survived this long.",
  source:"Noam Chomsky",
  tag:"Observe"},

  {quote:"The real man smiles in trouble, gathers strength from distress, and grows brave by reflection.",
  source:"Thomas Paine",
  tag:"Reflect"},

  {quote:"Real knowledge is to know the extent of one's ignorance.",
  source:"Confucius",
  tag:"Critical"},

  {quote:"Learn as if you were going to live forever. Live as if you were going to die tomorrow.",
  source:"Mahatma Gandhi",
  tag:"Motivate"},

  {quote:"Our attitude toward life determines life's attitude towards us.",
  source:"Earl Nightingale",
  tag:"Attitude"},

  {quote:"I love you not because of who you are, but because of who I am when I am with you..",
  source:"Roy Croft",
  tag:"Love"},

  {quote:"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
  source:"William Arthur Ward",
  tag:"Realism"},

  {quote:"Little minds are tamed and subdued by misfortune; but great minds rise above them.",
  source:"Washington Irving",
  tag:"Motivate"},

  {quote:"The question isn’t who is going to let me; it’s who is going to stop me.",
  source:"Ayn Rand",
  tag:"Inspire"},

  {quote:"All our dreams can come true, if we have the courage to pursue them.",
  source:"Walt Disney",
  tag:"Dream"}
];


// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random()*(quotes.length))
  return quotes[randomQuote]
}


// Create the printQuote funtion and name it printQuote

function printQuote(){
  quoteObject = getRandomQuote();
      printedText = "<p class=\"quote\">" + quoteObject.quote + "</p><p class=\"source\"> " + quoteObject.source + "</p>" +"</p><p class=\"tag\"> " + quoteObject.tag + "</p>";
      //text as it'll appear in box
      document.getElementById('quote-box').innerHTML = printedText;
      //make it appear on the page in the quote-box

}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//change background color on click
document.getElementById("loadQuote").addEventListener("click", function rndColor(){
    let red = Math.floor((Math.random() * 256));
    let green = Math.floor((Math.random() * 256));
    let blue = Math.floor((Math.random() * 256));
    let color = 'rgb'+'('+red+','+green+','+blue+')';
    document.body.style.backgroundColor = color;

});
