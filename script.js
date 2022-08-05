'use strict';

/*
let weaponTypes = ['AR', 'SMG', 'Launcher', 'LMG', 'Sniper', 'Marksman', 'Shotgun', 'Pistol'];

// Log number of weapon types
console.log(`Weapon types: ${weaponTypes.length}`);
// Get number of weapon types and randomize the number
let randomWeaponType_Number = Math.round(Math.random() * (weaponTypes.length -1));
// Log the number to the console
console.log('Random number: ' + randomWeaponType_Number);
// Use the random number to display a weapon type
console.log('Random weapon type: ' + weaponTypes[randomWeaponType_Number]);
// Add the weapon to the variable
let weaponType2 = weaponTypes[randomWeaponType_Number];
*/

// Weapon list
let ar;
let smg;
let launcher;
let lmg;
let sniper;
let shotgun;
let pistol;

// Marksman weapons
var m1_garand = {
    weaponName: 'M1 Garand',
    type: 'Marksman'
}
var svt_40 = {
    weaponName: 'SVT-40',
    type: 'Marksman'
}
var g_43 = {
    weaponName: 'G-43',
    type: 'Marksman'
}
var m1916 = {
    weaponName: 'M1916',
    type: 'Marksman'
}
var ebr_14 = {
    weaponName: 'EBR-14',
    type: 'Marksman'
}
var mk2_carbine = {
    weaponName: 'MK2 Carbine',
    type: 'Marksman'
}
var kar98k = {
    weaponName: 'Kar98k',
    type: 'Marksman'
}
var crossbow = {
    weaponName: 'Crossbow',
    type: 'Marksman'
}
var sks = {
    weaponName: 'SKS',
    type: 'Marksman'
}
var spr_208 = {
    weaponName: 'SP-R 208',
    type: 'Marksman'
}

const marksman = [m1_garand, svt_40, g_43, m1916, ebr_14, mk2_carbine, kar98k, crossbow, sks, spr_208];
// Display weapon name from marksman list
//console.log(marksman[1].weaponName);
//console.log(marksman[1].type);

// Log number of Marksman weapons
console.log(`Marksman weapons: ${marksman.length}`);
// Get number of Marksman weapons  and randomize the number
let randomMarksmanWeapon = Math.round(Math.random() * (marksman.length -1));
// Log the number to the console
console.log('Random Marksman number: ' + randomMarksmanWeapon);
// Use the random number to display a weapon type
console.log('Random weapon: ' + marksman[randomMarksmanWeapon].weaponName);
console.log('Weapon type: ' + marksman[randomMarksmanWeapon].type);
// Add the weapon to the variable
let marksmanWeaponName = marksman[randomMarksmanWeapon].weaponName;
let marksmanWeaponType = marksman[randomMarksmanWeapon].type;

/*
// Log number of weapon types
console.log(`Weapon types: ${weaponTypes.length}`);
// Get number of weapon types and randomize the number
let randomWeaponType_Number = Math.round(Math.random() * (weaponTypes.length -1));
// Log the number to the console
console.log('Random number: ' + randomWeaponType_Number);
// Use the random number to display a weapon type
console.log('Random weapon: ' + weaponTypes[randomWeaponType_Number]);
// Add the weapon to the variable
let weaponType2 = weaponTypes[randomWeaponType_Number];
*/