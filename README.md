Learning progression log from freeCodeCamp's "Javascript Data Structures and Algorithms," "Learn Basic Javascript by Building a Role Playing Game."
Project Description:
    "JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS. All modern browsers support JavaScript.
    In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Role Playing Game. You'll learn how to work with arrays, strings, objects, functions, loops, if/else statements, and more."

There are comments scattered throughout the different files, which are meant to serve as learning points. They are formatted in the way that they are because the text editor window is not full screen, but half. The formatting allows me to read the notes without having to scroll horizontally.

Notes taken from the project:

JavaScript interacts with the HTML using the Document Object Model, 
or DOM. The DOM is a tree of objects that represents the HTML. 
You can access the HTML using the document object, which represents your entire HTML document.
The querySelector() method takes a CSS selector as an argument and 
returns the first element that matches that selector.

In your role playing game, you will be able to visit different 
locations like the store, the cave, and the town square.
You will need to create a data structure that will hold 
the different locations.

Arrays can store any data type. This time, your array will be storing objects.
Objects are similar to arrays, but with a few differences.
One difference is that objects use properties, or keys, to access and modify data.

Objects are indicated by curly braces. An empty object would look like {}.

Object properties are written as key: value pairs,
where key is the name of the property (or the key),
and value is the value that property holds.

The innerText property controls the text that appears in an HTML element.

initialize buttons

These elements have a special property called onclick, 
which you can use to determine what happens when someone clicks that button.
You can access properties in JavaScript a couple of different ways:
The first is with dot notation.

Functions are special tools that allow you to run sections of code 
at specific times. 
You can declare functions using the function keyword.

When you have repetition in your code,
this is a sign that you need another function.
Functions can take parameters, which are values that
are given to the function each time it is run.

function goStore() {
    console.log("Going to store.");
}

This is called bracket notation. 
Values in an array are accessed by index.
The innerHTML property allows you to access or modify the content inside 
an HTML element using JavaScript:
p id="demo">This is a paragraph. p
document.querySelector("#demo").innerHTML = "Hello, innerHTML!";

Want to run code conditionally, you can use the if statement.
An if statement is used to make decisions in code. The ketword if
is followed by a condition in parentheses. If the condition is true, 
the code inside the curly braces {} is executed. If the condition is false,
the code inside the curly braces is skipped.

You can insert variables into a string with the 
concatenation operator +. 
any time text.innerText was updated, the old text was erased. 
This time, use the += operator to add text 
Arrays have a length property that returns 
the number of items in the array.
You may want to add new values to the weapons array in the future.
array indexing starts at zero.

Notice that you already have a currentWeapon variable elsewhere in your code. 
Since this new currentWeapon variable will be inside an if statement, 
it will be scoped only to that block of code.
Scope is the term used to describe where a variable can be accessed.
If a variable is declared inside a block of code,
it is only accessible to the code inside that block.
This is called block scope.
The shift() method on an array removes the first element in the array 
and returns it.

By default, the HTML element that shows the monster's stats has been hidden
with CSS. Use the style and display properties.
style property is used to access the inline style of an element
display property is used to set the visibility of an element

addition assignment operator(+=)
The Math object in JavaScript contains static properties and methods for 
mathematical constants and functions.
One of those is Math.random(), which generates a random number from 
0 (inclusive) to 1 (exclusive).
Another is Math.floor(), which rounds a given number 
down to the nearest integer.
Using these, you can generate a random number within a range.
health -= monsters[fighting].level; ->
This sets health equal to health minus the return value of the 
getMonsterAttackValue function, and passes the level of the monster 
as an argument.
On every attack, there should be a chance that the player's weapon breaks.
inventory.pop(), which will remove the last item in the array 
AND return it so it appears in your string.

Functions can return a value. This value can be assigned to a variable 
and used elsewhere in your code.
Ternary operator to ensure negative values are not returned.
The ternary operator is a conditional operator and can be used as a 
one-line if-else statement. 
The syntax is: condition ? expressionIfTrue : expressionIfFalse.

Log the value of hit to the console to use in debugging.
return hit;

logical OR operator ||
The logical OR operator will use the first value if it is truthy – that is, 
anything apart from NaN, null, undefined, 0, -0, 0n, "", and false. 
Otherwise, it will use the second value.

A while loop accepts a condition, and will run the code in the block 
until the condition is no longer true:
while (i < 5) {

}
for loops are declared with three expressions separated by semicolons. 
for (a; b; c), where a is the initialization expression, 
b is the condition, and c is the final expression.
The initialization expression is executed only once, 
before the loop starts, and is often used to define 
and set up the loop variable.
Many for loops use i as the counter and start from 0
The second statement in a for loop, the condition statement, 
is evaluated at the beginning of every loop iteration.
The loop will continue as long as the condition evaluates to be true.
The last statement in a for loop, the final expression, 
is executed at the end of each loop iteration.
The .includes() method determines if an array contains an element and 
will return either true or false.
