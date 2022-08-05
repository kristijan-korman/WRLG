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

// AR list
let stg44 = {
    weaponName: 'STG44',
    type: 'AR'
}
let automaton = {
    weaponName: 'Automaton',
    type: 'AR'
}
let itra_burst = {
    weaponName: 'Itra Burst',
    type: 'AR'
}
let bar = {
    weaponName: 'Bar',
    type: 'AR'
}
let as44 = {
    weaponName: 'AS44',
    type: 'AR'
}
let nz_41 = {
    weaponName: 'NZ-41',
    type: 'AR'
}
let volk = {
    weaponName: 'Volk',
    type: 'AR'
}
let cooper_carbine = {
    weaponName: 'Cooper Carbine',
    type: 'AR'
}
let kg_m40 = {
    weaponName: 'KG M40',
    type: 'AR'
}
let nikita_avt = {
    weaponName: 'Nikita AVT',
    type: 'AR'
}
let vargo_s = {
    weaponName: 'Vargo-S',
    type: 'AR'
}
let xm4 = {
    weaponName: 'XM4',
    type: 'AR'
}
let ak_47_cw = {
    weaponName: 'AK-47 (CW)',
    type: 'AR'
}
let krig_6 = {
    weaponName: 'Krig 6',
    type: 'AR'
}
let qbz_83 = {
    weaponName: 'QBZ-83',
    type: 'AR'
}
let ffar_1 = {
    weaponName: 'FFAR 1',
    type: 'AR'
}
let groza = {
    weaponName: 'Groza',
    type: 'AR'
}
let fara_83 = {
    weaponName: 'FARA 83',
    type: 'AR'
}
let c58 = {
    weaponName: 'C58',
    type: 'AR'
}
let em2 = {
    weaponName: 'EM2',
    type: 'AR'
}
let grav = {
    weaponName: 'Grav',
    type: 'AR'
}
let vargo_52 = {
    weaponName: 'Vargo 52',
    type: 'AR'
}
let kilo_141 = {
    weaponName: 'Kilo 141',
    type: 'AR'
}
let fal = {
    weaponName: 'FAL',
    type: 'AR'
}
let m4a1 = {
    weaponName: 'M4A1',
    type: 'AR'
}
let fr_556 = {
    weaponName: 'FR 5.56',
    type: 'AR'
}
let oden = {
    weaponName: 'Oden',
    type: 'AR'
}
let m13 = {
    weaponName: 'M13',
    type: 'AR'
}
let fn_scar_17 = {
    weaponName: 'FN Scar 17',
    type: 'AR'
}
let ak_47_mw = {
    weaponName: 'AK-47 (MW)',
    type: 'AR'
}
let ram_7 = {
    weaponName: 'RAM-7',
    type: 'AR'
}
let grau_556 = {
    weaponName: 'Grau 5.56',
    type: 'AR'
}
let cr_56_amax = {
    weaponName: 'CR-56 AMAX',
    type: 'AR'
}
let an_94 = {
    weaponName: 'AN-94',
    type: 'AR'
}
let as_val = {
    weaponName: 'AS VAL',
    type: 'AR'
}

const ar = [stg44, automaton, itra_burst, bar, as44, nz_41, volk, cooper_carbine, kg_m40, nikita_avt, vargo_s, xm4, ak_47_cw, krig_6, qbz_83, ffar_1, groza, fara_83, c58, em2, grav, vargo_52, kilo_141, fal, m4a1, fr_556, oden, m13, fn_scar_17, ak_47_mw, ram_7, grau_556, cr_56_amax, an_94, as_val];

// Log number of weapons
console.log(`AR weapons: ${ar.length}`);
// Get number of weapons and randomize the number
let randomARWeapon = Math.round(Math.random() * (ar.length -1));
// Log the number to the console
console.log('Random number: ' + randomARWeapon);
// Use the random number to display a weapon type
console.log('Random weapon: ' + ar[randomARWeapon].weaponName);
console.log('Weapon type: ' + ar[randomARWeapon].type);
// Add the weapon to the variable
let arWeaponName = ar[randomARWeapon].weaponName;
let arWeaponType = ar[randomARWeapon].type;

console.log('----------');

let smg;
let launcher;
let lmg;
let sniper;
let shotgun;
let pistol;

// Marksman weapons
let m1_garand = {
    weaponName: 'M1 Garand',
    type: 'Marksman'
}
let svt_40 = {
    weaponName: 'SVT-40',
    type: 'Marksman'
}
let g_43 = {
    weaponName: 'G-43',
    type: 'Marksman'
}
let m1916 = {
    weaponName: 'M1916',
    type: 'Marksman'
}
let ebr_14 = {
    weaponName: 'EBR-14',
    type: 'Marksman'
}
let mk2_carbine = {
    weaponName: 'MK2 Carbine',
    type: 'Marksman'
}
let kar98k = {
    weaponName: 'Kar98k',
    type: 'Marksman'
}
let crossbow = {
    weaponName: 'Crossbow',
    type: 'Marksman'
}
let sks = {
    weaponName: 'SKS',
    type: 'Marksman'
}
let spr_208 = {
    weaponName: 'SP-R 208',
    type: 'Marksman'
}

const marksman = [m1_garand, svt_40, g_43, m1916, ebr_14, mk2_carbine, kar98k, crossbow, sks, spr_208];

// Log number of weapons
console.log(`Marksman weapons: ${marksman.length}`);
// Get number of weapons and randomize the number
let randomMarksmanWeapon = Math.round(Math.random() * (marksman.length -1));
// Log the number to the console
console.log('Random number: ' + randomMarksmanWeapon);
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