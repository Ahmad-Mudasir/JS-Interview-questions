/* const {userData,podcasts,products,item,mediaData,podcast2,postData,podcast3} = require('./data.js'); */
import data from './data.mjs';
const { userData, podcasts, products, item, mediaData, podcast2, postData, podcast3 } = data;


/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
//Here’s how you can find two indices in the array that sum up to the target using JavaScript:
const arr = [2, 5, 7, 11];
let target = 7;

function findTwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // Return an empty array if no solution is found
}

const result = findTwoSum(arr, target);
console.log(result); // Output: [0, 1]


let msg = "ahmad";
 function cap(str){
     return str.toUpperCase();
 }
 
 console.log(cap(msg));
 
 /******************************************************************************
*******************************************************************************/
 
 /* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/
function panic(str){
    return str
        .split(' ')
        .join(' 😱 ')
        .toUpperCase() + "!";
}

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

/******************************************************************************
*******************************************************************************/
/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(str){
    if(str.endsWith("!")){
        // scrimba!
        return "shh... " + str.slice(0, -1).toLowerCase();
    }
    return "shh... " + str.toLowerCase();
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));

/******************************************************************************
*******************************************************************************/
/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    // loop through the string
    let newStr ='';
    for(let i=0;i<str.length;i++)
    newStr += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    // uppercase every character with an even index
    // assemble each character
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

/******************************************************************************
*******************************************************************************/
/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    // split sentence into an array of words
    const sentenceArr = str.split(' ');
    // loop through the arrays of words and capitalizeWord func on each word
    const capArr = sentenceArr.map(word => capitalizeWord(word));
    
    // join sentence arr back into a string
    return capArr.join()
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

/******************************************************************************
*******************************************************************************/
/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses(){
    // loop through 1 - 100
    for(let i = 1; i <= 100; i++){
        // is divisible by 3 & 5? 
        if(i % 15 === 0){
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);
        } else if(i % 3 === 0){
            console.log(`${i} - Vacation!`);
        } else if(i % 5 === 0){
            console.log(`${i} - $100,000 bonus!`);
        } else {
            console.log(`${i} - :(`);
        }
        
    }

}

awardBonuses();

/******************************************************************************
*******************************************************************************/
   /*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

function emojifyWord(word){
    // starts or ends with colon?
        // no: return word 
    if(!word.startsWith(":") && !word.endsWith(":")) return word; 
    
    // yes: remove colons 
    const slice = word.slice(1, -1);
    // exists in emoji object? 
    if(emojis[slice]){
         // yes: return emoji 
         return emojis[slice]
    } else {
        return slice;
    }   
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
    // split the passed in phrase into an array
    // map through the array and call emojifyWord() on each word in the phrase
    // join the array back together as a string, and return
    const newPhrase = phrase.split(" ").map(word => emojifyWord(word));
    return newPhrase.join(" ")
    
}



// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));

/******************************************************************************
*******************************************************************************/
/* 
Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

save - vase 

save - aesv
vase - aesv

aesv === aesv? ANAGRAM!

*/ 

function isAnagram(str1, str2){
    // are the strings the same length? if yes return false. 
    if(str1.length !== str2.length) return false;
    
    // split string into an array
    // sort
    // join the array back together as a string
    const newStr1 = str1.split('').sort().join('');
    
    // repeat with second word
    const newStr2 = str2.split('').sort().join('');

    // are the two words equal? true or false
    return newStr1 === newStr2;
}

//console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("inch", "chin"));
console.log(isAnagram("night", "thing"));
//console.log(isAnagram("treasure", "measure"));

/******************************************************************************
*******************************************************************************/
/* We Come in Peace!   
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

// built in string methods 
// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// reverse a string manually
function reverseString(str){
   // initialize a new empty string
   let reversedString = "";
   // loop through original string backwards, adding each character to the new string
   for(let i = str.length - 1; i >= 0; i--){
       reversedString += str[i];
   }
   return reversedString
}


/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

function reverseStringsInArray(arr){
    return arr.map(item => reverseString(item));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));

/******************************************************************************
*******************************************************************************/
/*  
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

// Solution 1: for loop 
function isPalindrome(str){
    // reverse the word using a backward for loop to create a new string
    let reverseStr = "";
    
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }

    // compare the new string to the original word - are they equal? 
        // yes - return true
        // no - return false
    return reverseStr === str;
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));



// Solution 2: reverse method
function paradram(str){
    let reversestr = str.split('').reverse().join('')
    
    return reversestr === str;
}

console.log(paradram("abbad"));

/******************************************************************************
*******************************************************************************/
/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    // create a new, empty string called dupesRemoved
    let dupesRemoved = '';
    
    // loop through the string we want to remove dupes from 
    for(let i = 0; i < chars.length; i++){
         // for every character in the string, check: is it in dupesRemoved?
         if(!dupesRemoved.includes(chars[i])){
             // if no, add it
             dupesRemoved += chars[i];
         }
            // if yes, keep going through the loop (do nothing)
    }
       
    // dupesRemoved -- it has no duplicates!
    return dupesRemoved;
}

console.log(removeDupeChars(password));
    
/******************************************************************************
*******************************************************************************/
/*      
/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str) {
   // Initialize a new empty object to hold the letter count
   const count = {};
   // Remove all spaces and lowercase all characters of the input string
   const name = str.toLowerCase().split(" ").join("");
   // Loop through the letters of the string using a for...of loop
   for (const char of name) {
        // If the character is not in the object, add it with a value of 1
        if (!count[char]) {
            count[char] = 1; 
        } else {
            // If the character is already in the object, increment its value
            count[char] += 1;
        }
   }
   return count;
}

console.log(countChars("abba")); // { a: 2, b: 2 }  

/******************************************************************************
*******************************************************************************/
/*   
/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
            "🥓 bacon",
            "🥓 bacon", 
            "🍳 eggs",
            "🫑 green peppers",
            "🧀 cheese",
            "🌶️ hot sauce",
            "🥓 bacon",
            "🥦 broccoli", 
            "🧀 cheese",
            "🥦 broccoli", 
            "🌶️ hot sauce"
        ]

function removeDupesFromArray(arr){
    const rmvDuplicate =[];
    arr.forEach(item =>{
        if(!rmvDuplicate.includes(item)){
            rmvDuplicate.push(item)
        }
    })
    return rmvDuplicate;
}

console.log(removeDupesFromArray(eggScrambleRecipe));


//solution2:
function removeDupesFromArray2(arr){
    return [...new Set(arr)];
}

console.log(removeDupesFromArray2([1,2,2,4,4,4,4,6,7,8]));

 
/******************************************************************************
*****************************************************************************/

/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

// solution1:
/*function flatten(arr){
    return arr.flat();
}
*/

//solution2:
function flatten(arr){
    // initialize a new, empty array
    // loop through the passed in array and check - string or array? 
        // if the item is string, push into the new array
        // if the item is an array, loop through it, pushing each item into the array
    // return new array
    
    const newArr = [];
    
    arr.forEach(element => {
        if(Array.isArray(element)){
            element.forEach(item => newArr.push(item))
        } else {
            newArr.push(element);
        }
    });
    return newArr;
}

// console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));


/******************************************************************************
*****************************************************************************/

/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */
//solution1-reduce
const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

function sumArray(arr){
    return arr.reduce((accomulator, currentValue)=>{
        return accomulator + currentValue;
    },0);
}

console.log(sumArray(studentCount));

//solution2-foreach
function solution2(arr){
    let sum =0;
    arr.forEach(item => sum +=item)
    return sum;
}
console.log(solution2(studentCount));


/******************************************************************************
*****************************************************************************/
/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    // initialize some new variable to: 
        // keep track of the current highest vote number
        let highestVotes = 0;
        // keep track of the current winning item
        let winningItem = "";
    // for each food option in the food object
    for(let food in obj){
          // is the current value higher than the value of highestVotes?
          if(obj[food] > highestVotes){
              // yes: the new value of highestVotes in the current value and
              highestVotes = obj[food];
              // winningItem = the current property
              winningItem = food;
          }   
    }
      
    // return string announcing the winner using winningItme and highestVote variables
    return `The winner is ${winningItem} with ${highestVotes} votes.`
}

console.log(findTheWinner(gameNightFood));


/******************************************************************************
*****************************************************************************/


/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/


function transformData(data){
      return data.map(user =>{
       const fullName = `${user.name.first} ${user.name.last}`;
       const date = new Date(user.dob.data).toDateString();
       return {fullName, date};
      })
}

console.log(transformData(userData));


/******************************************************************************
*****************************************************************************/
/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data){
    // filter list by paid prop
    // use map to create a new array of objects with only the specified properties 
    return data
        .filter(item => item.paid === false)
        .map(podcast => {
            return {
                title: podcast.title,
                rating: podcast.rating,
                paid: podcast.paid
            }
        });
}

console.log(getFreePodcasts(podcasts))


/******************************************************************************
*****************************************************************************/


/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data){
    // filter the data by product.type -- only sweet
    return (
    data.filter(product => product.type === "sweet")
    // loop through the data using map 
    .map(({item, price}) => {
        // for every candy, return a new object with only item and price
        return {
            item,
            price
        }
    }));
};

const shoppingCart = getSaleItems(products);
console.log(shoppingCart);


/******************************************************************************
*****************************************************************************/

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
    const total = arr.reduce((acc, curr) => {
        console.log(curr);
        return acc + curr.price;
    }, 0);
    
   return total.toFixed(2);
}

console.log(total(products));



/******************************************************************************
*****************************************************************************/

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
       return arr.reduce((acc,curr)=>
            curr.type === "savory" ? acc + curr.price : acc
       ,0).toFixed(2);
       
}

console.log(totalSavory(products));


/******************************************************************************
*******************************************************************************/
/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

function sortProducts(data){
    return data.sort((a,b)=>{
        return a.price - b.price;
    })
}

const listByCheapest = sortProducts(item);
//console.log(listByCheapest);

listByCheapest.forEach(items => console.log(items.product,items.price))


/******************************************************************************
*******************************************************************************/
for( var i =0 ;i<5; i++){
    setTimeout(()=>console.log(i),1000)
}


/******************************************************************************
*******************************************************************************/


/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

function getUniqueTags(data){
    const allTag = data.map(item => item.tags).flat();
    const uniqueTags = [...new Set(allTag)];
    return uniqueTags;
}

console.log(getUniqueTags(mediaData));


/* 2nd method
 // create a new array uniqueTags to hold the unique values
    const uniqueTags = [];
    // loop through the tags array

    allTag.forEach(tag => {
         // is the element already in the uniqueTags arr? 
         if(!uniqueTags.includes(tag)){
             uniqueTags.push(tag)
         }
    })
       
*/



/******************************************************************************
*******************************************************************************/


/* Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

a - b will sort an array in descending
b - a will sort in ascending order

*/

function sortByDuration(data, flightLength){

      // Check if flight is greater than 60 minutes
      if(flightLength > 60){
          // if yes, sort decending order (longest to shortest)
          data.sort((a,b) => b.duration - a.duration);
      } else {
          data.sort((a,b) => a.duration - b.duration);
      }
     // loop through my sorted array
     data.forEach(({title, duration}, index) => {
         // construct a string using the title and duration props 
        // use the index to number the list
        // console.log each item
         console.log(`${index + 1}. ${title}, ${duration} minutes`);
     });


}

sortByDuration(podcast2, 60);


/******************************************************************************
*******************************************************************************/


/* Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 

In data.js you'll find a list of Iggy's recent posts. 
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

function calcAverageLikes(data){
  const totalLikes = data.reduce((sum,post)=> sum += post.likes,0);
  const avgLikes = totalLikes / data.length;
  return avgLikes;
} 


console.log(calcAverageLikes(postData))



/******************************************************************************
*******************************************************************************/
/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 
const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
   // reduce the podcasts data down to a list of hosts
   return data.reduce((acc, curr)=>{
       // add curr.hosts to the acc array
       return acc.concat(curr.hosts);
   }, [])
}

function assignAwards(data){
    // use getHosts() to get a flat array of podcasts hosts
    const hosts = getHosts(data);
    // map through my array of hosts. for each:
    return hosts.map(host => {
         // use Math.random to generate a rand num between 0 and length of award arr
         const randIndex = Math.floor(Math.random() * awards.length); 
        // use the rand num to access a random award index
        // use string literal to concast a random award to each host 
        return `${awards[randIndex]} ${host}`;
    });   
}


//console.log(getHosts(podcasts));
console.log(assignAwards(podcast3));


/******************************************************************************
*******************************************************************************/
/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/ 

function createDescriptionsFor(data){
    // map through the data
    return data.map(podcast => {
        const {title, duration, genre, hosts} = podcast;
        // use title, duration, genre and host data to make description
        // for each podcast object, add description prop
        return {
            ...podcast,
            description: `${title} is a ${duration} minute ${genre} podcast hosted 
            by ${hosts[0]}.`
        };
    })
        
        
}

console.log(createDescriptionsFor(podcast3))


/******************************************************************************
*******************************************************************************/
/* Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber", 
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]

function sortPhrase(phrase){
     return  phrase.toLowerCase().split('').sort().join("").trim();
}

function isAnagramInArray(anagram, arr){
            return arr.filter(item =>{
                const word1 =sortPhrase(anagram);
                const word2 = sortPhrase(item)
                return word1 === word2;
            })
             
}

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));




/******************************************************************************
*******************************************************************************/
/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/ 

const api = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
//const flowerBed = document.querySelector('.emoji-flower-bed');
const flowerBed = document.querySelector('.emoji-flower-bed');

function clearTheGarden(arr){
    // filter by group property - "animal bug" && "plant flower"
    return arr.filter(emoji => emoji.group === "animal bug" || emoji.group === "plant flower");
}


fetch(api) 
    .then(response => response.json())
    .then(result => clearTheGarden(result))
    .then((data) => {
        data.forEach(emoji => {
            flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
        });    
    })
    .catch(err => console.log(err));


    