/* Array Methods 

Give a short description of what the method does, 
how it works, it's time complexity (if appropriate), 
and give three examples of it in action!

map - creates new array whos values are passed into callback function


reduce - executes reducer function (you provide) on each element in array result in 1 single value

Array.reduce((accumulator, currentValue, currentIndex, sourceArray){

})

Reduce Examples based on MDN 

const numArr = [5,4,3,2,1];
numArr.reduce((accumulator, currentVal) => { // result = 15
    accumulator + currentVal;
})

numArr.reduce((accumulator, currentVal) => {
    accumulator 
})

Flatten an array of arrays

let flattened = [['he','llo'], ['w'], ['or'], ['ld']].reduce(
    function(accumulator, currentValue) {
        return accumulator.concat(currentValue)
    }
)

filter - create a new array consisting of the specified elements that meet criteria

const numArr = [0,1,11,23,45, 3, 90];

    numArr.filter(item => item < 3) // [0,1]
    numArr.filter(item => item > 10) // [11,23,45,90]

const wordsArr = ["hello", "my", "name" "is", "Bob", "Boberson"];
const result = wordsArr.filter(item => item.includes('Bob')) // ["Bob", "Boberson"]


forEach - runs provided callback fnc once for each element
        - DOES NOT MUTATE ARRAY CALLING FOREACH() but the cb func can

Example 1
const namesArr = ["Alan", "Bob", "John", "Doe"];
namesArr.forEach(item => console.log(item));

Example 2
//const numbers = [2,4,6,8,10];
numberse.forEach(addTwo, item) {
    return item
});

Example 3
let GLOBAL_NUM = 0
function addTwo(item){
    GLOBAL_NUM += 2
}


sort - sort elements in-place converted into strings and compare their UTF-16 code units. 
       return sorted array default ascending

       Example 1: No compare function provided, sort as strings utf-16 code
       duplicates = [1, 3, 3, 5,5, 7, 12, 24, 77]
       duplicates.sort(); // [1, 12, 24,  3, 3, 5,  5,  7, 77]

       Example 2: Ascending Compare Function
       const nums = [5,22,11,124,94,58,69];
       nums.sort(ascendingCompare) // [5, 11,  22, 58, 69, 94, 124]
       
       Example 3: Using decsending compare function
       duplicates = [1, 3, 3, 5,5, 7, 12, 24, 77]
       const duplicates.sort(descendingCompare) // [77, 24, 12, 7, 5, 5,  3,  3, 1]

       SORT COMPARE FUNCTION (Determines how to sort ie. ascending, descending)

       // a - b < 0 negative num
       // a === b then a - b === 0
       // a > b then a - b > 0 positive num

       function ascendingCompare(a,b){
           return a - b

       }

       function descendingCompare(a,b){
           return b - a 
       }

    


       
slice - return a copy slice of a "pie" / part of the array from (start, end(excluding))

    Example 1:

    const pokemon = ['Pikachu', 'Bulbasaur', 'Pidgey', 'Snorlax', 'Onyx']
    const slicedPokemon = pokemon.slice(0,2) // ['Pikachu', 'Bulbasaur']

    Example 2:
    
    const foods = ['sushi', 'pizza', 'ramen', 'ice cream']
    const noSushi = foods.slice(1); ['pizza', 'ramen', 'ice cream']

    Example 3: no start / end

    const drinks = ['pepsi', 'ice tea', 'sprite', 'root beer', 'crush', 'dr. pepper']
    const allDrinks = drinks.slice();

pop - Remove last element in array and returns it. Changes .length of array

Example 1:
const nums = [11, 78, 10, 1, 7, 28, 34];
nums.pop() // [11, 78, 10, 1, 7, 28] --> 34

Example 2: 
const words = ['hello', 'world'] 
words.pop() // ['hello'] --> 'world'

Example 3: 
const innerArrs = [[1,2,3], [4,5,6], [7,8,9]]
innerArr.pop() //[[1,2,3], [4,5,6]] --> [7,8,9]

shift - remove first element in array and returns the removed element
Example 1:
const nums = [11, 78, 10, 1, 7, 28, 34];
nums.shift() // [78, 10, 1, 7, 28, 34]

Example 2: 
const words = ['hello', 'world'] 
words.pop() // ['world']

Example 3: 
const innerArrs = [[1,2,3], [4,5,6], [1,2,3]]
innerArr.pop() //[[4,5,6], [7,8,9]] --> [1,2,3]

push - add element to end of array.
Example 1:
const lunch = ["green salad", "chicken drumstick"]
lunch.push("apple");

Example 2:
const students [
    {
        name: 'Bob',
        age: 18
    },
    {
        name: 'Samantha',
        age: 20
    },
    {
        name: 'Timothy',
        age: 19
    }
]

students.push({ name: Denice, age: 18 });

Example 3: 
const grades = [56, 78, 40, 89];
grades.push(99)

unshift - adds 1 or more element to head of array. RETURN new length of array
Example 1:
const lunch = ["green salad", "chicken drumstick"]
lunch.unshift("water", "soup"); --> 4

Example 2: 

const students [
    {
        name: 'Bob',
        age: 18
    },
    {
        name: 'Samantha',
        age: 20
    },
    {
        name: 'Timothy',
        age: 19
    }
]

students.unshift({ name: 'Aaron', age: 20 }, { name: 'Rob', age: 19}) --> 5


includes - checks if array contains specified values passed in. Return true or false

Example 1:
const nums [1,2,3,4,5]
nums.includes(3,4,5) --> true

nums.includes(1,2,3,6) --> false
Example 3:
const random = [NaN, undefined, 0, 1, -1];
random.includes(undefined, NaN);


indexOf


every - test if all elements meets specified condition

const abc = ['a','b', 'c'];
const result = abc.every(item => typeof(item) === 'string'); // true

const numArr = [2,4,6];
const result = numArr.every(item => item > 1); // true
const falsyResult = numArr.every(item => item < 6);


.concat() --> merge two or more arrays returning a new single array
examples



*/