// Create an initials generator program
var name = prompt("Enter First name");
var surname = prompt("Enter Surname");

var firstletter = name[0];
var firstletter2 = surname[0];

var initials = `${firstletter}.${firstletter2}`

console.log(initials)


// Create a word position finder
var sentence = prompt("Enter a sentence");
var word = prompt("Enter a word to search for");

var position = sentence.indexOf(word);
console.log(position)

// Build a username generator
var firstname = prompt("Enter First name");
var surname = prompt("Enter Surname");

var fullname = `${firstname}${surname}`;

var username = `${fullname}${fullname.length}`;

console.log(username)