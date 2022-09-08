'use strict';

import { weapons } from "/modules/weapons.js";

let test = "Test";

let weaponType;
let randomWeaponType;
let randomWeaponName;
let weaponTypeLength;
let randomWeaponTypeNumber;
let randomWeaponClassNumber;
let randomWeaponClassName;

function divider() {console.log(' ');}

// Import test
// console.log(Object.keys(weapons.ar).length);

// Number of weapon objects inside weapon array
const numberOfWeaponTypes = Object.keys(weapons).length;
console.log(`Number of weapon types: ${numberOfWeaponTypes}`);

// Get attachment
// weapons.ar.stg44.attachments.supressors[1];

// Get first value in ar object
// Output = {weaponName: 'STG44', weaponType: 'AR'}
// Object.values(ar)[0] 

// Get first property in ar object
// Output = 'stg44'
// Object.keys(weapons.ar)[0];

// Get weaponName of the first value inside ar object
// Output = 'STG44'
// Object.values(ar)[0].weaponName

// Random weapon function
function RandomWeapon() {
    divider();

    // Get random weapon class number
    randomWeaponClassNumber = Math.round(Math.random() * (numberOfWeaponTypes -1));
    // Get random weapon class name
    randomWeaponClassName = Object.keys(weapons)[randomWeaponClassNumber];
    console.log(`Weapon type: ${randomWeaponClassName}`);

    if (randomWeaponClassName === 'ar') {
        randomWeaponType = weapons.ar;
        weaponType = 'AR';
    } else if (randomWeaponClassName === 'smg') {
        randomWeaponType = weapons.smg;
        weaponType = 'SMG';
    } else if (randomWeaponClassName === 'shotgun') {
        randomWeaponType = weapons.shotgun;
        weaponType = 'Shotgun';
    } else if (randomWeaponClassName === 'pistol') {
        randomWeaponType = weapons.pistol;
        weaponType = 'Pistol';
    } else if (randomWeaponClassName === 'marksman') {
        randomWeaponType = weapons.marksman;
        weaponType = 'Marksman';
    } else if (randomWeaponClassName === 'launcher') {
        randomWeaponType = weapons.launcher;
        weaponType = 'Launcher';
    } else if (randomWeaponClassName === 'lmg') {
        randomWeaponType = weapons.lmg;
        weaponType = 'LMG';
    } else if (randomWeaponClassName === 'sniper') {
        randomWeaponType = weapons.sniper;
        weaponType = 'Sniper';
    } else {
        console.log('Error: no weapons');
    }

    // Store random weapon type length
    weaponTypeLength = Object.values(randomWeaponType).length;

    // Random number from the weapon type length
    randomWeaponTypeNumber = Math.round(Math.random() * (weaponTypeLength -1));

    // Get random weapon name
    randomWeaponName = Object.values(randomWeaponType)[randomWeaponTypeNumber].weaponName;
    console.log(`${randomWeaponName} (${randomWeaponTypeNumber}/${weaponTypeLength})`);
}

// Write to HTML
RandomWeapon();
document.querySelector("#weaponName1").textContent = randomWeaponName;
document.querySelector("#weaponType1").textContent = weaponType;

RandomWeapon();
document.querySelector("#weaponName2").textContent = randomWeaponName;
document.querySelector("#weaponType2").textContent = weaponType;