/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*First, we make an empty object called animal. We then add the species
property and name property to it along with its values before finally 
added the property 'noises' and making it's value an empy array */
var animal = {};
animal.species = 'dog';
animal['name'] = 'Marley';
animal.noises = [];


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'bark';
noises.push('woof');
noises.unshift('grr');
noises[noises.length] = 'sniff';
console.log(noises[noises.length - 1]);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
noises.push('whine');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* first we made the empty array called animals. After that, we pushed
the array 'animal' into to it. we then made 3 more animals using objects
to make an organized list about the qualities of those said animals 
before finally pushing all 3 into the animals array */
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: 'duck',
name: 'Jerome',
noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);
var bear = {
    species: 'bear',
    name: 'Winnie',
    noises: ['growl', 'sniff', 'grumble','roar']
}; 
animals.push(bear);
var cat = {
    species: 'cat',
    name: 'Morgana',
    noises: ['meow','purr','hiss']
};
animals.push(cat);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* We picked array because it's not specifying a huge amount of details
for the friends of the animals and it'd be much easier to search through.
*/
var friends = [];
/* after we make the array, we then make the getRandom function using 
Math.random() */
function getRandom(max) {
  return Math.random();
}
/* we then made the friends property inside one of the animals and
assigned it to the friends array */
duck['friends'] = friends;
console.log(friends)
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}