var quoteBtn = document.getElementById("quoteBtn");

var arr = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "“So many books, so little time.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“A room without books is like a body without a soul.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“In three words I can sum up everything I've learned about life: it goes on.”",
  "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
];
var quoteContent = document.getElementById("quoteContent");
var random;
var previous = null;
function newQuote() {
  var max = arr.length;
  random = parseInt(Math.random() * max);
  if (random == previous && random > 0 && random < max - 1) {
    random = previous + 1;
    quoteContent.innerHTML = arr[random];
  } else if (random == previous && random > 0 && random == max - 1) {
    random = previous - 1;
    quoteContent.innerHTML = arr[random];
  } else {
    quoteContent.innerHTML = arr[random];
  }

  previous = random; //4
  console.log(random);
}
