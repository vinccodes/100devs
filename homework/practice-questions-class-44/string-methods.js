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

Example 2: VISA CREDIT CARD PREFIX

const visaCard = 4019 40XX XXXX XXXX
const re = /4009\s?43\d{2}\s?\d{4}\s?\d{4}

console.log(visacard.match(re))

TODO:
Example 3: HEX COLOR CODES

const myColor = #f5e6ca
const reColor = /#([0-9]|[abcdef]*){3|6}


==========
repeat - create new copy of string contain the concatenated string together N times.
==========

Example 1: Basic Repeat

const awesome = "Bob";
console.log(awesome.repeat(3)); // BobBobBob

Example 2: Using String Template Literals + repeat()

const firstPhrase = "I have to"
const secondPhrase = "git good"

console.log(`${firstPhrase} ${secondPhrase.repeat(5)}`);

Example 3: Hip hip Hooray x3

const hooray = "Hip hip hooray! "
console.log(`Three cheers for Leon! ${hooray.repeat(3)}`);

==========
replace - returns news string that finds matches of a pattern and replaces with a replacement
            DEFAULT only replace first match, use /g flag replace ALL matches
==========

Examples 1: replace(regexp, newSubstr)
@regexp     regular expression object or literal
@newSubstr  the string used to replace matching @regexp

const myRe = /h2/g
const h2 = "<h2>This is some headline</h2>";
const newH3 = h2.replace(myRe, "h3")


Example 2: replace(regexp, replacerFunction)


const person1 = "person1@gmail.com"
person1.replace(/@gmail/g, convertEmail);
const convertEmail = (match) => {
    console.log(match);
    return "@outlook"
}

Example 3: 

const randomSentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus risus nec nisi sagittis, non sagittis nisl egestas. Donec est neque, rhoncus in arcu sed, scelerisque convallis enim. Sed non elit nec lorem pellentesque gravida non at enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit."

const output = randomSentence.replace(/lorem/ig, "SIKE")


==========
search - finds matching RegExp, and returns the starting index where found OR -1 NOT FOUND
==========

const rainbow = "red yellow pink green purple orange blue";
rainbow.search(/salmon/) // -1 not found

Example 2: 

const rainbow = "red yellow pink green purple orange blue";
rainbow.search(/orange/) // 29

Example 3: Phone Number finding "-" character
const hotline = "999 9999";
hotline.search(/[-]/g) // -1


const hotline = "999-9999 123-3459";
hotline.search(/[-]/g) // 3



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