// Exercise 1: String Length 
// Write a function that takes a string and returns its length.

// function strLen(str){
//     return str.length;
// }
// console.log("String length: " + strLen("Hello world"));


// Exercise 2: Character at Index 
// Write a function that takes a string and an index. Return the character at that index.

// function getCharAtIndex(str, index) {
//     if (index < 0 || index >= str.length) {
//       return null;
//     }
//     return str[index];
// }

// let exStr = "Hello world!";
// console.log(getCharAtIndex(exStr, 7));


// Exercise 3: Extract Substring 
// Write a function that takes a string and two indices (start and end). Return the substring between the given indices.

// function getSubstring(str, start, end) {
//     if (start < 0 || end > str.length || start > end) {
//       return null;
//     }
//     return str.substring(start, end);
// }

// console.log(getSubstring("Ismayilov", 2, 5));


// Exercise 4: Split and Count Words 
// Write a function that takes a sentence and returns the number of words in the sentence.

// function countWords(sentence) {
//     const words = sentence.trim().split(" ");
//     return words.length;
// }

// let sentence = " Hello, how many words are in this sentence? ";
// console.log(countWords(sentence)); 

// Exercise 5: Search and Replace 
// Write a function that takes a sentence and allows the user to search for a word or phrase and replace it with another word or phrase.

// function strReplace(str, search, rep) {
//     return str.replace(search, rep);
// }
// console.log(strReplace("Hello World", "World", "Baku"));

// Exercise 6: Find Index of Character 
// Write a function that takes a string and a character and returns the index of the first occurrence of that character in the string.

// function firstIndex(str, char) {
//     return str.indexOf(char);
// }

// console.log(firstIndex("Hello World","l"));

// Exercise 7: Reverse a String 
// Write a function that reverses and returns a given string.

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
  
// let originalString = "Hello world!";
// let reversedString = reverseString(originalString);
  
// console.log(reversedString);

// Exercise 8: Remove Whitespace 
// Write a function that takes a sentence with extra whitespace, removes the extra spaces and returns the sentence.

// function removeExtraWhitespace(str) {
//     return str.trim().replace(/\s+/g, " ");
// }
  
// let str = "  This   is    an   example   with  extra   spaces.  ";
// let cleanedSentence = removeExtraWhitespace(str); 
// console.log(cleanedSentence);

// Exercise 9: Concat
// Write a function that concatenates two given strings and returns the resulting string.

// function concatenateStrings(str1, str2) {
//     return str1.concat(" ", str2);
// }
  
// let string1 = "Hello";
// let string2 = "World!";
// let result = concatenateStrings(string1, string2);

// console.log(result); 

// Exercise 10: Uppercase Conversion 
// Write a function that takes a sentence and converts the first letter of each word to uppercase.

// function capitalizeFirstLetter(str) {
//     const capitalizedWords = str.split(" ")
//       .map((word) => {
//         if (word.length > 0) {
//           return word[0].toUpperCase().concat(word.slice(1));
//         }
//         return word;
//       });
  
//     return capitalizedWords.join(" ");
// }
  
// let sentence = "hello world! how are you today?";
// let capitalizedSentence = capitalizeFirstLetter(sentence);
  
// console.log(capitalizedSentence);