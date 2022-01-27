let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//splitting string to array
const storyWords = story.split(' ');

//filtering out overused words
const betterWords = storyWords.filter(word => {
  if (unnecessaryWords.includes(word) === false) {
    return word;
  }  
});

//counting each overused word
let reallyCounter = 0;
let veryCounter = 0;
let basicallyCounter = 0;
for (word of storyWords) {
  if (overusedWords.includes(word) && word === overusedWords[0]) {
    reallyCounter++;
  } else if (overusedWords.includes(word) && word === overusedWords[1]) {
    veryCounter++;
  } else if (overusedWords.includes(word) && word === overusedWords[2]) {
    basicallyCounter++;
  }
}

//counting number of sentences in original string
let sentenceCounter = 0;
for (word of storyWords) {
  if (word.slice(-1) === '.' || word.slice(-1) === '!') {
    sentenceCounter++;
  }
}

//printing various info to console
console.log(`The number of words in the string is ${storyWords.length} words.`);
console.log(`There are ${sentenceCounter} sentences in the string.`);
console.log(`You used the following overused words this number of times: \n${overusedWords[0]}: ${reallyCounter} \n${overusedWords[1]}: ${veryCounter} \n${overusedWords[2]}: ${basicallyCounter}`);

//logging betterWords array to console as string
console.log(betterWords.join(' '));





