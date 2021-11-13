// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("what is your firstname?");
var lastName = prompt("what is your lastname?");

var FullName = firstName +" " + lastName;

alert(FullName)

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var names = prompt("what is your favourite mobile model?");

var name1 = names.length;
alert(name1) 

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var namess = "pakistani";
var num = "index of 'n':" ;
var name2 = num +namess.lastIndexOf( "n");

document.write(name2)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


var namess = "hello world";
var num = "index of 'l':" ;
var name2 = num + namess.lastIndexOf( "l")
document.write(name2)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var nam = "pakistani";
var nmaes = nam.charAt(3)
document.write(nmaes)



// 6. Repeat Q1 using string concat() method.

 var firstName = prompt("what is your firstname?");
 var lastName = prompt("what is your lastname?");

var num = firstName.concat(lastName);
document.write(num);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var name1 = "hyderabad"
var names = name1.replace("hyder", "Islam");
document.write(names);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var name1 = "Ali and Sami are best friends. They play cricket and football together"
var names = name1.replace(/and/g, "&");
document.write(names);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var num = "472";
var num1 = Number(num);
document.write(num1)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var num = prompt("enter your name?").toUpperCase();
document.write(num)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

var userName = prompt("enter your name?");
var firstName = userName[0].toUpperCase();
var otherName= userName.slice(1).toLowerCase();
document.write(firstName+otherName)

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


var name1 = 35.36;
var names = name1.toString().replace(".", "");
document.write(names)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

var user = prompt("enter")

var arr =["$" ,"%","@","#"]

for(var i = 0 ; i<arr.length; i++){
    if(user.charAt(i) ==arr[i]){
        alert("error")
    }
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// var name1 = prompt("what is the cookie name?").toLowerCase();
// var isNotMatch = "no";
// var bakery= ["cake", "apple pie", "cookie", "chips", "patties"];



// for(var a= 0 ; a<bakery.length; a++){

//     if(name1 === bakery[a])
   
//     alert(name1+"available")
//     isNotMatch = "yes";
// }
// if(isNotMatch == "no"){
//     alert(name1+"not avaiable")
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";


var num = university.split("");
document.write(num)

// 17. Write a program to display the last character of a user
// input.

var names ="pakistan";
var name1 = names.lastIndexOf("n");
document.write(name1)

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var name1 ="The quick brown fox jumps over the lazy dog";
var name2 =name1.indexOf("the");
document.write(name2)

// Assignment # 26-30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = 3.45214
var num1 = Math.round(3.45214);
var num2 = Math.floor(3.45214);
var num3 = Math.ceil(3.45214);
document.write("number:"+ num+"<br>")
document.write("round of value:"+ num1+"<br>")
document.write("floor value of the number:"+ num2+"<br>")
document.write("ceil value of the number:"+ num3)

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
 var num = -2.673;
 var num1 = Math.round(-2.673);
 var num2 = Math.floor(-2.673);
 var num3 = Math.ceil(-2.673);
 document.write("number:"+ num+"<br>")
 document.write("round of value:"+ num1+"<br>")
 document.write("floor value of the number:"+ num2+"<br>")
 document.write("ceil value of the number:"+ num3)

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var num = Math.random(4,6);
document.write(num)

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var head = 1;
var tail = 2;

var toss = Math.random() * 2;
var floor = Math.floor(toss)
if(floor === 0){
    document.write("0 <br> Random Coin Value: Head")
} else if(floor === 1)
{
    document.write("1 <br> Random Coin Value: Tails")
}


// 6. Write a program that shows a random number between 1
// and 100 in your browser

var num = Math.random("random number between 1 and 100" + 1,100);
document.write(num)

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

 var num = Math.random(1,10);
 document.write(num)






