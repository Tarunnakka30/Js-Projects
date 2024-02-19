const quotes = [
    "Human strength lies in the ability to change yourself.",
    "You can die anytime, but living takes true courage.",
    "You will never be able to love anybody else until you love yourself.",
    "All we can do is live until the day we die. Control what we can…and fly free." ,
    "If you don't take risks, you can't create a future.",
    "If you don`t share someone`s pain, you can never understand them." ,
    "There`s no shame in falling down! True shame is to not stand up again!",
    "We need to stop living for others. From now on…Let`s live for ourselves!" ,
    "Those who stand at the top determine what`s wrong and what`s right! This very place is neutral ground! Justice will prevail, you say? But, of course, it will! Whoever wins this war becomes justice!",
    "Forgetting is like a wound. The wound may heal, but it has already left a scar." ,
    "You need to accept the fact that you`re not the best and have all the will to strive to be better than anyone you face.",
    "No matter how deep the night, it always turns to day, eventually.",
    "Life is not a game of luck. If you wanna win, work hard.",
    "People`s lives don`t end when they die, it ends when they lose faith." 
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear();
    }

    while(true){
        const randomIndex = Math.floor(Math.random() * quotes.length);

        if(usedIndexes.has(randomIndex)) continue;

        const quote = quotes[randomIndex];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIndex);
        break;
    }
}


