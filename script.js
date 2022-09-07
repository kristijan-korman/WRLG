'use strict';

import { weapons } from "/modules/weapons.js";

let randomWeaponType;
let weapon;
let random;
let weaponName;
let weaponType;
let randomWeapon;

// Import test
// console.log(Object.keys(weapons.ar).length);

// Number of weapon objects inside weapon array
const numberOfWeaponTypes = Object.keys(weapons).length;
console.log(`Number of weapon types: ${numberOfWeaponTypes}`);

// Store random weapon class number
let randomWeaponClassNumber = Math.round(Math.random() * (numberOfWeaponTypes -1));
// Store random weapon class name
let randomWeaponClassName = Object.keys(weapons)[randomWeaponClassNumber];
console.log(`Random weapon type: ${randomWeaponClassNumber} (${randomWeaponClassName})`);

if (randomWeaponClassName === 'ar') {
    randomWeapon = weapons.ar;
} else if (randomWeaponClassName === 'smg') {
    randomWeapon = weapons.smg;
} else if (randomWeaponClassName === 'shotgun') {
    randomWeapon = weapons.shotgun;
} else if (randomWeaponClassName === 'pistol') {
    randomWeapon = weapons.pistol;
} else if (randomWeaponClassName === 'marksman') {
    randomWeapon = weapons.marksman;
} else if (randomWeaponClassName === 'launcher') {
    randomWeapon = weapons.launcher;
} else if (randomWeaponClassName === 'lmg') {
    randomWeapon = weapons.lmg;
} else if (randomWeaponClassName === 'sniper') {
    randomWeapon = weapons.sniper;
} else {
    console.log(Nothing);
}

// Store random weapon type length
let weaponTypeLength = Object.values(randomWeapon).length;
console.log('Random weapons in the type: ' + weaponTypeLength);

// Random number from the weapon type length
let randomWeaponTypeNumber = Math.round(Math.random() * (weaponTypeLength -1));
console.log('Random number: ' + randomWeaponTypeNumber);

// Display a weapon name using randomly generated number
let weaponSelected = randomWeapon;
weaponSelected = randomWeapon + randomWeaponClassName;
//
console.log(Object.values(randomWeapon)[randomWeaponTypeNumber].weaponName);
console.log(Object.values(randomWeapon)[randomWeaponTypeNumber].weaponType);

//let weaponsRandom = weapons[0];
//let v = Object.values(weaponsRandom)[randomWeaponClassNumber];
//console.log(weaponsRandom);

// Get attachment
// weapons.ar.stg44.attachments.supressors[1];

// Get length of object
// Object.keys(launcher).length

// Get first [0] property of the launchers array and inside it select second [1] suppressor
// Object.values(launcher)[0].attachments.supressors[1];

// Get number of properties inside ar object
// Output = 35
// Object.keys(ar).length

// Get first value in ar object
// Output = {weaponName: 'STG44', weaponType: 'AR'}
// Object.values(ar)[0] 

// Get first property in ar object
// Output = 'stg44'
// Object.keys(weapons.ar)[0];

// Get weaponName of the first value inside ar object
// Output = 'STG44'
// Object.values(ar)[0].weaponName

// Random weapon type
// randomWeaponType = Math.round(Math.random() * (Object.keys(weapons).length -1));
// console.log(randomWeaponType);
// randomWeaponType = weaponTypes[randomWeaponType];
// console.log(randomWeaponType);

// Random weapon function
function RandomWeapon() {
    // Random weapon type
    randomWeaponType = Math.round(Math.random() * (weaponTypes.length -1));
    randomWeaponType = weaponTypes[randomWeaponType];

    // Random weapon from the selected type
    weapon = randomWeaponType;
    random = Math.round(Math.random() * (weaponTypes[randomWeaponType].length -1));

    // Get weapon name and type
   weaponName = weapon[random].weaponName;
    weaponType = weapon[random].weaponType;
    console.log(weaponName +', '+ weaponType);
}

// Write to HTML
//RandomWeapon();
document.querySelector("#weaponName1").textContent = weaponName;
document.querySelector("#weaponType1").textContent = weaponType;

//RandomWeapon();
document.querySelector("#weaponName2").textContent = weaponName;
document.querySelector("#weaponType2").textContent = weaponType;