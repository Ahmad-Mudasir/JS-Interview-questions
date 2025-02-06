# JS-Interview-questions
# JavaScript Interview Questions

This repository contains a collection of JavaScript interview questions and solutions. Each question is designed to test your understanding of JavaScript concepts, including array methods, string manipulation, object handling, and more. Below is a breakdown of the questions and their solutions.

---

## Table of Contents
1. [Two Sum Problem](#two-sum-problem)
2. [Panic Function](#panic-function)
3. [Whispering Function](#whispering-function)
4. [Alternating Caps](#alternating-caps)
5. [Title Case](#title-case)
6. [FizzBuzz](#fizzbuzz)
7. [Emojify](#emojify)
8. [Anagram Checker](#anagram-checker)
9. [Reverse String](#reverse-string)
10. [Palindrome Checker](#palindrome-checker)
11. [Remove Duplicate Characters](#remove-duplicate-characters)
12. [Count Character Occurrences](#count-character-occurrences)
13. [Remove Duplicates from Array](#remove-duplicates-from-array)
14. [Flatten Nested Arrays](#flatten-nested-arrays)
15. [Sum Array](#sum-array)
16. [Find the Winner](#find-the-winner)
17. [Transform Data](#transform-data)
18. [Find Free Podcasts](#find-free-podcasts)
19. [Get Sale Items](#get-sale-items)
20. [Total Groceries](#total-groceries)
21. [Total Savory Items](#total-savory-items)
22. [Sort Products by Price](#sort-products-by-price)
23. [Find Unique Tags](#find-unique-tags)
24. [Sort Podcasts by Duration](#sort-podcasts-by-duration)
25. [Calculate Average Likes](#calculate-average-likes)
26. [Get Podcast Hosts](#get-podcast-hosts)
27. [Create Podcast Descriptions](#create-podcast-descriptions)
28. [Find Anagrams in Array](#find-anagrams-in-array)
29. [Clear the Garden](#clear-the-garden)

---

## Two Sum Problem
**Problem:** Given an array of integers and a target value, find two indices in the array that sum up to the target.

```javascript
function findTwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

const arr = [2, 5, 7, 11];
const target = 7;
console.log(findTwoSum(arr, target)); // Output: [0, 1]
```

---

## Panic Function
**Problem:** Write a function that takes a sentence and returns it in all caps with an exclamation point at the end. If the sentence is a phrase, add a 😱 emoji between each word.

```javascript
function panic(str) {
    return str
        .split(' ')
        .join(' 😱 ')
        .toUpperCase() + "!";
}

console.log(panic("I'm almost out of coffee")); // Output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
```

---

## Whispering Function
**Problem:** Write a function that takes a sentence and returns it in lowercase with "shh..." at the beginning. Remove any exclamation point at the end.

```javascript
function whisper(str) {
    if (str.endsWith("!")) {
        return "shh... " + str.slice(0, -1).toLowerCase();
    }
    return "shh... " + str.toLowerCase();
}

console.log(whisper("PLEASE STOP SHOUTING.")); // Output: "shh... please stop shouting."
```

---

## Alternating Caps
**Problem:** Write a function that takes a string and returns a sentence in which every other letter is capitalized.

```javascript
function altCaps(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
// Output: "WhEn yOu vIsIt pOrTlAnD YoU HaVe tO Go tO VoOdOo dOnUtS"
```

---

## Title Case
**Problem:** Write a function that capitalizes every word in a sentence.

```javascript
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function toTitleCase(str) {
    return str.split(' ').map(word => capitalizeWord(word)).join(' ');
}

console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
// Output: "Pumpkin Pranced Purposefully Across The Pond"
```

---

## FizzBuzz
**Problem:** Write a program that grants bonuses to employees based on their ID numbers.

```javascript
function awardBonuses() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);
        } else if (i % 3 === 0) {
            console.log(`${i} - Vacation!`);
        } else if (i % 5 === 0) {
            console.log(`${i} - $100,000 bonus!`);
        } else {
            console.log(`${i} - :(`);
        }
    }
}

awardBonuses();
```

---

## Emojify
**Problem:** Write a function that replaces words wrapped in colons with corresponding emojis.

```javascript
const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat": "🐱",
    "dog": "🐕"
};

function emojifyWord(word) {
    if (!word.startsWith(":") && !word.endsWith(":")) return word;
    const slice = word.slice(1, -1);
    return emojis[slice] || slice;
}

function emojifyPhrase(phrase) {
    return phrase.split(" ").map(word => emojifyWord(word)).join(" ");
}

console.log(emojifyPhrase("I :heart: my :cat:"));
// Output: "I 💜 my 🐱"
```

---

## Anagram Checker
**Problem:** Write a function to check if two strings are anagrams.

```javascript
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const newStr1 = str1.split('').sort().join('');
    const newStr2 = str2.split('').sort().join('');
    return newStr1 === newStr2;
}

console.log(isAnagram("inch", "chin")); // Output: true
```

---

## Reverse String
**Problem:** Write a function to reverse a string.

```javascript
function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

console.log(reverseString("htraE no od ot ffutS")); // Output: "Stuff to do on Earth"
```

---

## Palindrome Checker
**Problem:** Write a function to check if a string is a palindrome.

```javascript
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return reversedStr === str;
}

console.log(isPalindrome("madam")); // Output: true
```

---

## Remove Duplicate Characters
**Problem:** Write a function to remove duplicate characters from a string.

```javascript
function removeDupeChars(chars) {
    let dupesRemoved = '';
    for (let i = 0; i < chars.length; i++) {
        if (!dupesRemoved.includes(chars[i])) {
            dupesRemoved += chars[i];
        }
    }
    return dupesRemoved;
}

console.log(removeDupeChars("aabbccb1212")); // Output: "abc12"
```

---

## Count Character Occurrences
**Problem:** Write a function to count how many times each character in a name occurs.

```javascript
function countChars(str) {
    const count = {};
    const name = str.toLowerCase().split(" ").join("");
    for (const char of name) {
        if (!count[char]) {
            count[char] = 1;
        } else {
            count[char] += 1;
        }
    }
    return count;
}

console.log(countChars("Peggy Porth")); // Output: { p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1 }
```

---

## Remove Duplicates from Array
**Problem:** Write a function to remove duplicates from an array.

```javascript
function removeDupesFromArray(arr) {
    return [...new Set(arr)];
}

console.log(removeDupesFromArray([1, 2, 2, 4, 4, 4, 4, 6, 7, 8])); // Output: [1, 2, 4, 6, 7, 8]
```

---

## Flatten Nested Arrays
**Problem:** Write a function to flatten nested arrays.

```javascript
function flatten(arr) {
    return arr.flat();
}

console.log(flatten([[1, 2], [3, 4], [5, 6]])); // Output: [1, 2, 3, 4, 5, 6]
```

---

## Sum Array
**Problem:** Write a function to sum all numbers in an array.

```javascript
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3])); // Output: 6
```

---

## Find the Winner
**Problem:** Write a function to find the item with the highest number of votes.

```javascript
function findTheWinner(obj) {
    let highestVotes = 0;
    let winningItem = "";
    for (let item in obj) {
        if (obj[item] > highestVotes) {
            highestVotes = obj[item];
            winningItem = item;
        }
    }
    return `The winner is ${winningItem} with ${highestVotes} votes.`;
}

console.log(findTheWinner({ "🍕 pizza": 3, "🌮 tacos": 10, "🥗 salads": 7 })); // Output: "The winner is 🌮 tacos with 10 votes."
```

---

## Transform Data
**Problem:** Write a function to transform user data into a specific format.

```javascript
function transformData(data) {
    return data.map(user => {
        const fullName = `${user.name.first} ${user.name.last}`;
        const date = new Date(user.dob.date).toDateString();
        return { fullName, date };
    });
}

console.log(transformData(userData));
```

---

## Find Free Podcasts
**Problem:** Write a function to filter out free podcasts.

```javascript
function getFreePodcasts(data) {
    return data
        .filter(item => item.paid === false)
        .map(podcast => ({
            title: podcast.title,
            rating: podcast.rating,
            paid: podcast.paid
        }));
}

console.log(getFreePodcasts(podcasts));
```

---

## Get Sale Items
**Problem:** Write a function to filter out sale items.

```javascript
function getSaleItems(data) {
    return data
        .filter(product => product.type === "sweet")
        .map(({ item, price }) => ({ item, price }));
}

console.log(getSaleItems(products));
```

---

## Total Groceries
**Problem:** Write a function to calculate the total cost of groceries.

```javascript
function total(arr) {
    return arr.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
}

console.log(total(products)); // Output: "73.44"
```

---

## Total Savory Items
**Problem:** Write a function to calculate the total cost of savory items.

```javascript
function totalSavory(arr) {
    return arr.reduce((acc, curr) => curr.type === "savory" ? acc + curr.price : acc, 0).toFixed(2);
}

console.log(totalSavory(products)); // Output: "9.97"
```

---

## Sort Products by Price
**Problem:** Write a function to sort products by price.

```javascript
function sortProducts(data) {
    return data.sort((a, b) => a.price - b.price);
}

const listByCheapest = sortProducts(products);
listByCheapest.forEach(item => console.log(item.product, item.price));
```

---

## Find Unique Tags
**Problem:** Write a function to find unique tags from media data.

```javascript
function getUniqueTags(data) {
    const allTags = data.flatMap(item => item.tags);
    return [...new Set(allTags)];
}

console.log(getUniqueTags(mediaData));
```

---

## Sort Podcasts by Duration
**Problem:** Write a function to sort podcasts by duration.

```javascript
function sortByDuration(data, flightLength) {
    if (flightLength > 60) {
        data.sort((a, b) => b.duration - a.duration);
    } else {
        data.sort((a, b) => a.duration - b.duration);
    }
    data.forEach(({ title, duration }, index) => {
        console.log(`${index + 1}. ${title}, ${duration} minutes`);
    });
}

sortByDuration(podcasts, 60);
```

---

## Calculate Average Likes
**Problem:** Write a function to calculate the average number of likes.

```javascript
function calcAverageLikes(data) {
    const totalLikes = data.reduce((sum, post) => sum + post.likes, 0);
    return totalLikes / data.length;
}

console.log(calcAverageLikes(postData));
```

---

## Get Podcast Hosts
**Problem:** Write a function to get a flat array of podcast hosts.

```javascript
function getHosts(data) {
    return data.reduce((acc, curr) => acc.concat(curr.hosts), []);
}

console.log(getHosts(podcasts));
```

---

## Create Podcast Descriptions
**Problem:** Write a function to create descriptions for podcasts.

```javascript
function createDescriptionsFor(data) {
    return data.map(podcast => {
        const { title, duration, genre, hosts } = podcast;
        return {
            ...podcast,
            description: `${title} is a ${duration} minute ${genre} podcast hosted by ${hosts[0]}.`
        };
    });
}

console.log(createDescriptionsFor(podcasts));
```

---

## Find Anagrams in Array
**Problem:** Write a function to find anagrams in an array.

```javascript
function isAnagramInArray(anagram, arr) {
    const sortedAnagram = anagram.toLowerCase().split('').sort().join('').trim();
    return arr.filter(item => {
        const sortedItem = item.toLowerCase().split('').sort().join('').trim();
        return sortedAnagram === sortedItem;
    });
}

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));
```

---

## Clear the Garden
**Problem:** Write a function to filter out everything but bugs and flowers.

```javascript
function clearTheGarden(arr) {
    return arr.filter(emoji => emoji.group === "animal bug" || emoji.group === "plant flower");
}

fetch(api)
    .then(response => response.json())
    .then(result => clearTheGarden(result))
    .then(data => {
        data.forEach(emoji => {
            flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
        });
    })
    .catch(err => console.log(err));
```

---

## Conclusion
These questions cover a wide range of JavaScript concepts and are commonly asked in interviews. Practice them to improve your problem-solving skills and prepare for your next interview! 🚀
