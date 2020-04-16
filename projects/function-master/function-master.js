//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
const resultArr = [];
for(let key in object){
    resultArr.push(object[key]);
} return resultArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// first we create an empty array to nestle our values into //
 var arr = [];
 //we then execute a for in loop of the obeject//
 //then we push the keys of said object into the empty array//
for (let key in object){
  arr.push(key);
}
// finally we return arr.join(' ') to close off the function//
return arr.join(' ');




}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // first we create an empty array to nestle our values into //
 var arr = [];
 //we then execute a for in loop of the obeject//
 //then we push the values of said object into the empty array//
for (let key in object){
    if (typeof object[key] === 'string'){
  arr.push(object[key]);
}
}
// finally we return arr.join(' ') to close off the function//
return arr.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // make an if statement related to confirming of the collection is an array//
 if (Array.isArray(collection) === true) {
     //if true, return 'array'//
     return 'array';
     //put an else statement, making everything else return as 'object'//
 } else {
     return 'object';
 }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
/* We first capitolized the first letter of the string used as an argument
before we then concat and slice in the rest of the string, as charAt() 
only returns whatever letter is at that index */
     return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
 let arr = string.split(' ');
  let newArr = [];
for (let i = 0; i <= arr.length - 1; i++) {
  /* loop through each index at charAt(0) */
  newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
} return newArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
return 'Welcome ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
return name + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
var noises = object.noises;
if (Array.isArray(noises) === false || noises.length < 1){
    return 'there are no noises';
}
else if (Array.isArray(noises) === true && noises.length > 0){
    return noises.join(' ');
} 
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
let array = string.split(' ');
for (let i = 0; i < array.length; i++){
    if (array[i] === word){
        return true;
    } 
} return false;
}


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
let friends = object.friends;
if (Array.isArray(friends) === true){
for (let i = 0; i < friends.length; i++){
    if (friends[i] === name){
        return true;
    }
}
}return false; 
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }

    if(current === null){
        return nameList;
    }

    for(var i=0; i<nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }

    return result;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (let i = 0; i < array.length; i++){
    if (array[i] === object.key){
        object.delete(array[i]);
    }
} 
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}