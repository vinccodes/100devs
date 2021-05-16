
/*
1. Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/
function multiplyArr(myList) {
  let count = 1;
  let result = myList[0];
  while (count != myList.length) {
    result = result * myList[count];
    count += 1;

  }
  return result;
}

const theList = [2,4,6,8];

console.log(multiplyArr(theList));

/*
Question 2

You will be given an array of all the family members' ages,
 in any order. The ages will be given in whole numbers, so a baby of 5 months, 
 will have an ascribed 'age' of 0. 
 Return a new array with 
 [youngest age, oldest age, difference between the youngest and oldest age].
 */

 function familyReport(ages) {
  // sort the ages into ascending order
  ages.sort(compareNumeric)
  // get the smallest age (first index)
  const smallest = ages[0];
  // get the largest age (last index)
  const largest = ages[ages.length - 1];
  // difference between largest and smallest age
  const difference = largest - smallest;

  return [smallest, largest, difference]
}  

/* Question 3 

Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
Example:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6

*/
function sumLowHigh(arr) {
  // sort the array
  arr.sort(compareNumeric)
  // get the first element
  const lowest = arr[0];
  // get the last element
  const highest = arr[arr.length-1];

  const exclude = [lowest, highest]

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //TODO: if the current value is in exclude array, then skip
    if (){
      // skip 
    }
    else {
      sum += arr[i];
    }
  }

  return sum;
}

// helper function used in .sort() 
function compareNumeric(a,b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}