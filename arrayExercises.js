// Write a function that takes an array and returns a new array with the last item removed.

// function removeLastItem(arr) {
//     arr.pop();
//     return arr;
// }
// console.log(removeLastItem([3, 5, "item_3", 6]));

// Write a function that takes an array and returns the length of items it has.

// function arrLength(arr) {
//     return arr.length;
// }
// console.log(arrLength([1, 2, 3, 4, 5]));

// Write a function that takes an array and an item, returns the array with the item added to the end of array.

// function push_End(arr, item) {
//     arr.push(item);
//     return arr;
// }
// console.log(push_End([1, 2, 3, 4], 5));

// Write a function that takes an array and an item, returns the array with the item added to the beginning of array.

// function push_Front(arr, item) {
//     arr.unshift(item);
//     return arr;
// }
// console.log(push_Front([1, 2, 3, 4], 5));

// Write a function that takes an array of words and returns a string of the words seperated by ,

// function strSeperat(arr) {
//     return arr.join(", ")
// }

// const arr = ["Hello", "World", "seperate"];
// console.log(strSeperat(arr));

// Write a function that takes an array and two indexes (start and end). Return an array consisting of items between the given indexes.

// function slice_Arr(arr, start, end) {
//     return arr.slice(start, end);
// }
// console.log(slice_Arr([1, 2, 3, 4, 5, 6], 1, 4));

// Write a function that takes an array and an index, returns the item at given index.

// function Index_return(arr, index) {
//     return arr[index];
// }
// console.log(Index_return([1, 2, 3, 4, 5, 6], 3));

// Write a function that takes an array and an item, removes that item from the array without leaving undefined items, returns the new array.

// function removeItem(arr, item) {
//     const index = arr.indexOf(item);
//     if (index > -1) {
//       arr.splice(index, 1);
//     }
//     return arr;
// }
  
// const array = [1, 2, 3, 4];
// console.log(removeItem(array, 2));