
//Create three arrays of subject, verb and objects to for the three parts of a random sentence
let phraseSubject = ['The women', 'The children', 'We', 'You', 'They', 'All animals', 'All the people on the earth'];
let phraseVerb = ['like to eat', 'play a lot with', 'use much of', 'do not want anything to do with'];
let phraseObject = ['buns, cakes, and biscuits.', ' oranges.', 'a strong stone wall.', 'very interesting books.'];

//create variable to contain the ransomly selected phrases
let selectedSubject;
let selectedVerb;
let selectedObject;
let mixedMessage;

//ceate a funtion to randomly select an item from an array of phrases
const randPhrase = phraseArr => {
    // Generate a random number from 0 to the array length
    const arrIndex = Math.floor(Math.random() * phraseArr.length);
    //use the randomly generated number as the index of the phrase to pick and return the phrase
    return phraseArr[arrIndex];

}
//Call the randPhrase function to select from the three arrays
selectedSubject = randPhrase(phraseSubject);
selectedVerb = randPhrase(phraseVerb);
selectedObject = randPhrase(phraseObject);

//Join the selected phrases to form the random sentence.
mixedMessage = selectedSubject + ' ' + selectedVerb + ' ' + selectedObject;

//output the sentence to the user
console.log(mixedMessage);