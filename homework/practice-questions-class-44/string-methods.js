/* String Methods 
===================
charAt - returns string representation of char at specified index

Example 1
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
includes
==========


indexOf
match
repeat
replace
search
slice
split
substr
toLowerCase
toUpperCase
trim

*/