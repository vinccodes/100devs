/* String Methods 
===================
charAt - returns string representation of char at specified index

Example 1:
const my_sentence = "100devs is cool";
my_sentence.charAt(5); // v

Example 2: returns empty string if index greater than .length-1
my_sentence.charAt(my_sentence.length+1);

Example 3: Providing no index, default is index 0
my_sentence.charAt(); // 1

==========
charCodeAt - returns int between 0 and 65535 (2^16 - 1) representing UTF-16 code unit at given index
==========
Example 1: Expected in range 0 - .length - 1 returns an int
const sentence = "100devs is cool";
sentence.charCodeAt(7) // 32

Example 2: Not in range of 0 - .length - 1 RETURNS NaN
sentence.charCodeAt(20) // NaN


Example 3: Non-integer passed as argument, defaults index to 0
const sentence.charCodeAt("notAnInt"); // 49 


=======
concat - concats passed string(s) to the calling string returns new copy of string
=======
Example 1:
string_1 = "components"
string_2 = "are"
string_3 = "everywhere"

const result = string_1.concat(" ", string_2, " ", string_3) // "components are everywhere"

Example 2: Without spaces

const noSpaces = string1.concat(string_2, string_3); // "componentsareeverywhere"

Example 3: 1 String ( 1... N strings can be provided)
const hello = "hello"
const word = "world"
const new_word = hello.concat(word); // helloworld

==========
includes - check if one string found within another string (case-sensitive)
==========

Example 1:

const sentence = "this is a sentence";
sentence.includes('this') // true

Example 2
const sentence = "this is a sentence";
sentence.includes("not in sentence"); // false

@param  position is optional, starts the search at that index
Example 3: (searchString, positon) 

const sentence = "javascript is very cool"
sentence.includes('javascript', 1); // false

==========
indexOf - returns index within calling String object of FIRST OCCURENCE 
          of passed in value, starting search at @fromIndex
          RETURNS -1 if value not found
==========

Example 1: 
const sentence = "javascript is cool";
console.log(sentence.indexOf("is")); // 11

Example 2: indexOf(value, fromIndex)
@fromIndex default is 0

const sentence = "javascript is cool";
console.log(sentence.indexOf("cool", 11)); // 14

Example 3:
const sentence = "javascript is cool";
console.log(sentence.indexOf("is", 50)); // -1 because search starts at index 50; > str.length

==========
match - gets the result of matching string based on a regular expression (regex)

      match(regexp)
      @regexp   regular expression object

      Nothing passed into match(), returns Array with empty "" ----> [""]
==========

Example 1:
const APP_VERSION = v4.8
const re = /v(\d+(\.\d)*)/i;
console.log(APP_VERSION.match(re)) // ['v4.8', '4.8' '.8', index: 0, input: 'v4.8', groups: undefined]

Example 2:


Example 3: 


==========
repeat
==========

==========
replace
==========

==========
search
==========

==========
slice
==========

==========
split
==========

==========
substr
==========

===========
toLowerCase
===========

===========
toUpperCase
===========

==========
trim
==========



*/