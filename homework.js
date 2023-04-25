//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
assumption made: we care about casing, it needs to match exactly.
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for (let i = 0; i < dog_names.length; i++) {
        console.log(dog_string.search(dog_names[i]) > -1 ?"Matched Dog Name":"No Matches") 
        // search would return -1 if not found, but still return something so we need the > -1
    }
}
findWords()

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index")
        }
    } return arr
}

console.log(replaceEvens(given_arr))


// Here are my CodeWars...but JavaScript

// 1. Green Glass Door - 7kyu
// https://www.codewars.com/kata/5642bf07a586135a6f000004/

function stepThroughWith(s) {
    for (let i=1; i < s.length; i++) {
      if (s[i] == s[i-1]){
        return true;
      }
    } return false;
}

console.log(stepThroughWith('moon')) // has double letters
console.log(stepThroughWith('sun')) // does not have double letters

// 2. Break camelCase - 6kyu
// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
      (string[i].toUpperCase() == string[i]) ? newString += ` ${string[i]}`: newString += `${string[i]}` 
    } return newString;
}

// 3. Halloween Candies
// (see Slack -- earlier whiteboard problem)

let calcCandies = arr => {
    let max = 0
    // we never learned how to get the max from an array in JS, so without cheating:
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    } 
    let totalCandies = max * arr.length // the number we need to hand out
    // .reduce() will get us the total of the original array
    let numsReduced = arr.reduce((accumulator, currentNum)=>{
        return accumulator + currentNum
    })
    // return how many More candies we need to give out
    return totalCandies - numsReduced
}

console.log(calcCandies([5,8,6,4]))
console.log(calcCandies([1,2,4,6]))


// 4. My Last Whiteboard Problem

/* # Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

# Examples
# [7] should return 7, because it occurs 1 time (which is odd).
# [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
# [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
# constraints: 
# cannot use .count() */
console.log("=================================")

let getOddNumTimes = arr => {
    let oddsArr = [];
    for (let i = 0; i < arr.length; i++) {
        // if the element is in oddsArr, remove it, otherwise add it
        // if (oddsArr.indexOf(arr[i]) > -1) { // note: I did have to look up indexOf, since we did not go over in class
        //     oddsArr.splice(oddsArr.indexOf(arr[i]), 1)
        // } else {
        //     oddsArr.push(arr[i])
        // }
        (oddsArr.indexOf(arr[i]) > -1) ? oddsArr.splice(oddsArr.indexOf(arr[i]), 1) : oddsArr.push(arr[i])
    } return oddsArr[0];
}

console.log(getOddNumTimes([7])) // 7 
console.log(getOddNumTimes([0,1,0,1,0])) // 0 
console.log(getOddNumTimes([1,2,2,3,3,3,4,3,3,3,2,2,1])) // 4