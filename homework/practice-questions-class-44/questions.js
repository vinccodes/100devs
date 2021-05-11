
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
QUESTION 2:
You will be given an array of all the family members' ages,
 in any order. The ages will be given in whole numbers, so a baby of 5 months, 
 will have an ascribed 'age' of 0. 
 Return a new array with 
 [youngest age, oldest age, difference between the youngest and oldest age].
 */

 function familyReport(ages) {
  // TODO:
  // sort the ages into ascending order

  // get the smallest age (first index)

  // get the largest age (last index)
}