let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

/* JavaScript interacts with the HTML using the Document Object Model, 
or DOM. The DOM is a tree of objects that represents the HTML. 
You can access the HTML using the document object, which represents your entire HTML document.
The querySelector() method takes a CSS selector as an argument and 
returns the first element that matches that selector.
*/

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    {
      name: "stick",
      power: 5
    },
    {
      name: "dagger",
      power: 30
    },
    {
      name: "claw hammer",
      power: 50
    },
    {
      name: "sword",
      power: 100
    }
  ];

const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]

/*
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
*/

const locations = [
    {
      name: "town square",
      // Remember that these functions are variables, not strings, and should not be wrapped in quotes.
      "button text": ["Go to store", "Go to cave", "Fight dragon"],
      "button functions": [goStore, goCave, fightDragon],
      text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
      name: "store",
      "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store."
    },
    {
      name: "cave",
      "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
      "button functions": [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters."
    },
    {
      name: "fight",
      "button text": ["Attack", "Dodge", "Run"],
      "button functions": [attack, dodge, goTown],
      text: "You are fighting a monster."
    },
    {
      name: "kill monster",
      "button text": ["Go to town square", "Go to town square", "Go to town square"],
      "button functions": [goTown, goTown, easterEgg],
      text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
      name: "lose",
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
      "button functions": [restart , restart , restart ],
      text: "You die. &#x2620;"
    },
    {
      name: "win",
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
      "button functions": [restart, restart, restart],
      text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
    },
    {
      name: "easter egg",
      "button text": ["2", "8", "Go to town square?"],
      "button functions": [pickTwo, pickEight, goTown],
      text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];

/*
The innerText property controls the text that appears in an HTML element.

initialize buttons

These elements have a special property called onclick, 
which you can use to determine what happens when someone clicks that button.
You can access properties in JavaScript a couple of different ways:
The first is with dot notation.
*/

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

/* Functions are special tools that allow you to run sections of code 
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
*/

function update(location) {
  /*
  The innerHTML property allows you to access or modify the content inside 
  an HTML element using JavaScript:
  <p id="demo">This is a paragraph.</p>
  document.querySelector("#demo").innerHTML = "Hello, innerHTML!";
  */
  
  monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}
  
function goTown() {
    update(locations[0]);
}
  
function goStore() {
    update(locations[1]);
}
  
function goCave() {
    update(locations[2]);
}

function fightDragon() {
    console.log("Fighting dragon.");
}

/*
Want to run code conditionally, you can use the if statement.
An if statement is used to make decisions in code. The ketword if
is followed by a condition in parentheses. If the condition is true, 
the code inside the curly braces {} is executed. If the condition is false,
the code inside the curly braces is skipped.
*/

function buyHealth() {
    if (gold >= 10) {
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

/* You can insert variables into a string with the 
concatenation operator +. 
any time text.innerText was updated, the old text was erased. 
This time, use the += operator to add text 
Arrays have a length property that returns 
the number of items in the array.
You may want to add new values to the weapons array in the future.
array indexing starts at zero.
*/

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

/*
Notice that you already have a currentWeapon variable elsewhere in your code. 
Since this new currentWeapon variable will be inside an if statement, 
it will be scoped only to that block of code.
Scope is the term used to describe where a variable can be accessed.
If a variable is declared inside a block of code,
it is only accessible to the code inside that block.
This is called block scope.
The shift() method on an array removes the first element in the array 
and returns it.
*/

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    inventory > 1;
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {

}

function fightDragon() {
  fighting = 2;
  goFight();
}

/*
By default, the HTML element that shows the monster's stats has been hidden
 with CSS. Use the style and display properties.
 style property is used to access the inline style of an element
 display property is used to set the visibility of an element
*/

function goFight() {
  update(locations[3]);
  monsterHealth = monster[fighting].health;
  monsterStats.style.display = 'block';
  monsterName.innerText = monster[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

/*
addition assignment operator(+=)
The Math object in JavaScript contains static properties and methods for 
mathematical constants and functions.
One of those is Math.random(), which generates a random number from 
0 (inclusive) to 1 (exclusive).
Another is Math.floor(), which rounds a given number 
down to the nearest integer.
Using these, you can generate a random number within a range.
*/

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  /*health -= monsters[fighting].level; ->
   This sets health equal to health minus the return value of the 
   getMonsterAttackValue function, and passes the level of the monster 
   as an argument.*/
  health -= getMonsterAttackValue(monsters[fighting].level);
  if(isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
  } if (fighting === 2) {
    winGame();
  } else {
      defeatMonster();
  /*
  On every attack, there should be a chance that the player's weapon breaks.
  inventory.pop(), which will remove the last item in the array 
  AND return it so it appears in your string.
  */
  }if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

/*
Functions can return a value. This value can be assigned to a variable 
and used elsewhere in your code.
Ternary operator to ensure negative values are not returned.
The ternary operator is a conditional operator and can be used as a 
one-line if-else statement. 
The syntax is: condition ? expressionIfTrue : expressionIfFalse.
*/

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  // Log the value of hit to the console to use in debugging.
  console.log(hit);
  // return hit;
  return hit > 0 ? hit : 0;
}

/*
logical OR operator ||
The logical OR operator will use the first value if it is truthy – that is, 
anything apart from NaN, null, undefined, 0, -0, 0n, "", and false. 
Otherwise, it will use the second value.
*/

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name + ".";
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  winGame();
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"]
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
} 

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

/*
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
*/

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}