
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