'use strict';

let randomWeaponType;
let weapon;
let random;
let weaponName;
let weaponType;

// AR list
let stg44 = {
    weaponName: 'STG44',
    weaponType: 'AR'
}
let automaton = {
    weaponName: 'Automaton',
    weaponType: 'AR'
}
let itra_burst = {
    weaponName: 'Itra Burst',
    weaponType: 'AR'
}
let bar = {
    weaponName: 'Bar',
    weaponType: 'AR'
}
let as44 = {
    weaponName: 'AS44',
    weaponType: 'AR'
}
let nz_41 = {
    weaponName: 'NZ-41',
    weaponType: 'AR'
}
let volk = {
    weaponName: 'Volk',
    weaponType: 'AR'
}
let cooper_carbine = {
    weaponName: 'Cooper Carbine',
    weaponType: 'AR'
}
let kg_m40 = {
    weaponName: 'KG M40',
    weaponType: 'AR'
}
let nikita_avt = {
    weaponName: 'Nikita AVT',
    weaponType: 'AR'
}
let vargo_s = {
    weaponName: 'Vargo-S',
    weaponType: 'AR'
}
let xm4 = {
    weaponName: 'XM4',
    weaponType: 'AR'
}
let ak_47_mw = {
    weaponName: 'AK-47 (MW)',
    weaponType: 'AR'
}
let ak_47_cw = {
    weaponName: 'AK-47 (CW)',
    weaponType: 'AR'
}
let krig_6 = {
    weaponName: 'Krig 6',
    weaponType: 'AR'
}
let qbz_83 = {
    weaponName: 'QBZ-83',
    weaponType: 'AR'
}
let ffar_1 = {
    weaponName: 'FFAR 1',
    weaponType: 'AR'
}
let groza = {
    weaponName: 'Groza',
    weaponType: 'AR'
}
let fara_83 = {
    weaponName: 'FARA 83',
    weaponType: 'AR'
}
let c58 = {
    weaponName: 'C58',
    weaponType: 'AR'
}
let em2 = {
    weaponName: 'EM2',
    weaponType: 'AR'
}
let grav = {
    weaponName: 'Grav',
    weaponType: 'AR'
}
let vargo_52 = {
    weaponName: 'Vargo 52',
    weaponType: 'AR'
}
let kilo_141 = {
    weaponName: 'Kilo 141',
    weaponType: 'AR'
}
let fal = {
    weaponName: 'FAL',
    weaponType: 'AR'
}
let m4a1 = {
    weaponName: 'M4A1',
    weaponType: 'AR'
}
let fr_556 = {
    weaponName: 'FR 5.56',
    weaponType: 'AR'
}
let oden = {
    weaponName: 'Oden',
    weaponType: 'AR'
}
let m13 = {
    weaponName: 'M13',
    weaponType: 'AR'
}
let fn_scar_17 = {
    weaponName: 'FN Scar 17',
    weaponType: 'AR'
}
let ram_7 = {
    weaponName: 'RAM-7',
    weaponType: 'AR'
}
let grau_556 = {
    weaponName: 'Grau 5.56',
    weaponType: 'AR'
}
let cr_56_amax = {
    weaponName: 'CR-56 AMAX',
    weaponType: 'AR'
}
let an_94 = {
    weaponName: 'AN-94',
    weaponType: 'AR'
}
let as_val = {
    weaponName: 'AS VAL',
    weaponType: 'AR'
}

const ar = [stg44, automaton, itra_burst, bar, as44, nz_41, volk, cooper_carbine, kg_m40, nikita_avt, vargo_s, xm4, ak_47_mw, ak_47_cw, krig_6, qbz_83, ffar_1, groza, fara_83, c58, em2, grav, vargo_52, kilo_141, fal, m4a1, fr_556, oden, m13, fn_scar_17, ram_7, grau_556, cr_56_amax, an_94, as_val];

// SMG list
let mp_40 = {
    weaponName: 'MP-40',
    weaponType: 'SMG'
}
let sten = {
    weaponName: 'Sten',
    weaponType: 'SMG'
}
let m1928 = {
    weaponName: 'M1928',
    weaponType: 'SMG'
}
let owen_gun = {
    weaponName: 'Owen Gun',
    weaponType: 'SMG'
}
let type_100 = {
    weaponName: 'Type 100',
    weaponType: 'SMG'
}
let ppsh_41_cw = {
    weaponName: 'PPSH-41 (CW)',
    weaponType: 'SMG'
}
let ppsh_41_vg = {
    weaponName: 'PPSH-41 (VG)',
    weaponType: 'SMG'
}
let welgun = {
    weaponName: 'Welgun',
    weaponType: 'SMG'
}
let armaguerra_43 = {
    weaponName: 'Armaguerra 43',
    weaponType: 'SMG'
}
let h4_blixen = {
    weaponName: 'H4 Blixen',
    weaponType: 'SMG'
}
let marco_5 = {
    weaponName: 'Marco 5',
    weaponType: 'SMG'
}
let mp5_mw = {
    weaponName: 'MP5 (MW)',
    weaponType: 'SMG'
}
let mp5_cw = {
    weaponName: 'MP5 (CW)',
    weaponType: 'SMG'
}
let milano_821 = {
    weaponName: 'Milano 821',
    weaponType: 'SMG'
}
let ak_47u = {
    weaponName: 'AK-74u',
    weaponType: 'SMG'
}
let ksp_45 = {
    weaponName: 'KSP 45',
    weaponType: 'SMG'
}
let bullfrog = {
    weaponName: 'Bullfrog',
    weaponType: 'SMG'
}
let mac_10 = {
    weaponName: 'MAC-10',
    weaponType: 'SMG'
}
let lc10 = {
    weaponName: 'LC10',
    weaponType: 'SMG'
}
let nail_gun = {
    weaponName: 'Nail Gun',
    weaponType: 'SMG'
}
let ots_9 = {
    weaponName: 'OTs 9',
    weaponType: 'SMG'
}
let tec_9 = {
    weaponName: 'TEC-9',
    weaponType: 'SMG'
}
let lapa = {
    weaponName: 'LAPA',
    weaponType: 'SMG'
}
let aug = {
    weaponName: 'AUG',
    weaponType: 'SMG'
}
let p90 = {
    weaponName: 'P90',
    weaponType: 'SMG'
}
let uzi = {
    weaponName: 'Uzi',
    weaponType: 'SMG'
}
let pp19_bizon = {
    weaponName: 'PP19 Bizon',
    weaponType: 'SMG'
}
let mp7 = {
    weaponName: 'MP7',
    weaponType: 'SMG'
}
let striker_45 = {
    weaponName: 'Striker 45',
    weaponType: 'SMG'
}
let fennec = {
    weaponName: 'Fennec',
    weaponType: 'SMG'
}
let iso = {
    weaponName: 'ISO',
    weaponType: 'SMG'
}
let cx_9 = {
    weaponName: 'CX-9',
    weaponType: 'SMG'
}

const smg = [mp_40, sten, m1928, owen_gun, type_100, ppsh_41_cw, ppsh_41_vg, welgun, armaguerra_43, h4_blixen, marco_5, mp5_mw, mp5_cw, milano_821, ak_47u, ksp_45, bullfrog, mac_10, lc10, nail_gun, ots_9, tec_9, lapa, aug, p90, uzi, pp19_bizon, mp7, striker_45, fennec, iso, cx_9];

const launchers = {
    m1_bazooka : {
        weaponName: 'M1 Bazooka', 
        weaponType: 'Launcher',
        attachments: {
            supressors : ['supPrvi', 'supDrugi', 'supTri'],
            magazine : ['magPrvi', 'magDva', 'magTri']
        }
    },
    panzerschreck : {
        weaponName: 'Panzerschreck',
        weaponType: 'Launcher'
    },
    panzerfaust : {
        weaponName: 'Panzerfaust',
        weaponType: 'Launcher'
    },
    mk11_launcher : {
        weaponName: 'MK11 Launcher',
        weaponType: 'Launcher'
    },
    cigma_2 :{
        weaponName: 'Cigma 2',
        weaponType: 'Launcher'
    },
    rpg_7_mw : {
        weaponName: 'RPG-7 (MW)',
        weaponType: 'Launcher'
    },
    rpg_7_cw : {
        weaponName: 'RPG-7 (CW)',
        weaponType: 'Launcher'
    },
    pila : {
        weaponName: 'PILA',
        weaponType: 'Launcher'
    },
    strela_p : {
        weaponName: 'Strela-P',
        weaponType: 'Launcher'
    },
    jokr : {
        weaponName: 'JOKR',
        weaponType: 'Launcher'
    },
    mgl_32_grenade_launcher : {
        weaponName: 'MGL-32 Grenade Launcher',
        weaponType: 'Launcher'
    }
}

// Get attachment
launchers.m1_bazooka.attachments.supressors[1];

// Get length of object
Object.keys(launchers).length;

// Get first [0] property of the launchers array and inside it select second [1] suppressor
Object.values(launchers)[0].attachments.supressors[1];

// Launcher list
let m1_bazooka = {
    weaponName: 'M1 Bazooka',
    weaponType: 'Launcher'
}
let panzerschreck = {
    weaponName: 'Panzerschreck',
    weaponType: 'Launcher'
}
let panzerfaust = {
    weaponName: 'Panzerfaust',
    weaponType: 'Launcher'
}
let mk11_launcher = {
    weaponName: 'MK11 Launcher',
    weaponType: 'Launcher'
}
let cigma_2 = {
    weaponName: 'Cigma 2',
    weaponType: 'Launcher'
}
let rpg_7_mw = {
    weaponName: 'RPG-7 (MW)',
    weaponType: 'Launcher'
}
let rpg_7_cw = {
    weaponName: 'RPG-7 (CW)',
    weaponType: 'Launcher'
}
let pila = {
    weaponName: 'PILA',
    weaponType: 'Launcher'
}
let strela_p = {
    weaponName: 'Strela-P',
    weaponType: 'Launcher'
}
let jokr = {
    weaponName: 'JOKR',
    weaponType: 'Launcher'
}
let mgl_32_grenade_launcher = {
    weaponName: 'MGL-32 Grenade Launcher',
    weaponType: 'Launcher'
}

const launcher = [m1_bazooka, panzerschreck, panzerfaust, mk11_launcher, cigma_2, rpg_7_mw, rpg_7_cw, pila, strela_p, jokr, mgl_32_grenade_launcher];

// Lmg list
let mg42 = {
    weaponName: 'MG42',
    weaponType: 'LMG'
}
let dp27 = {
    weaponName: 'DP27',
    weaponType: 'LMG'
}
let type_11 = {
    weaponName: 'Type 11',
    weaponType: 'LMG'
}
let bren = {
    weaponName: 'Bren',
    weaponType: 'LMG'
}
let whitley = {
    weaponName: 'Whitley',
    weaponType: 'LMG'
}
let ugm_8 = {
    weaponName: 'UGM-8',
    weaponType: 'LMG'
}
let stoner_63 = {
    weaponName: 'Stoner 63',
    weaponType: 'LMG'
}
let rpd = {
    weaponName: 'RPD',
    weaponType: 'LMG'
}
let m60 = {
    weaponName: 'M60',
    weaponType: 'LMG'
}
let mg_82 = {
    weaponName: 'MG 82',
    weaponType: 'LMG'
}
let pkm = {
    weaponName: 'PKM',
    weaponType: 'LMG'
}
let sa87 = {
    weaponName: 'SA87',
    weaponType: 'LMG'
}
let m91 = {
    weaponName: 'M91',
    weaponType: 'LMG'
}
let mg34 = {
    weaponName: 'MG34',
    weaponType: 'LMG'
}
let holger_26 = {
    weaponName: 'Holger-26',
    weaponType: 'LMG'
}
let bruen_mk9 = {
    weaponName: 'Bruen MK9',
    weaponType: 'LMG'
}
let finn_lmg = {
    weaponName: 'FiNN LMG',
    weaponType: 'LMG'
}
let raal_lmg = {
    weaponName: 'RAAL MG',
    weaponType: 'LMG'
}

const lmg = [mg42, dp27, type_11, bren, whitley, ugm_8, stoner_63, rpd, m60, mg_82, pkm, sa87, m91, mg34, holger_26, bruen_mk9, finn_lmg, raal_lmg];

// Sniper list
let type_99 = {
    weaponName: 'Type 99',
    weaponType: 'Sniper'
}
let s3_line_rifle = {
    weaponName: '3-Line Rifle',
    weaponType: 'Sniper'
}
let kar98k_vg = {
    weaponName: 'Kar98k (VG)',
    weaponType: 'Sniper'
}
let gorenko_anti_tank_rifle = {
    weaponName: 'Gorenko Anti-Tank Rifle',
    weaponType: 'Sniper'
}
let pelington_703 = {
    weaponName: 'Pelington 703',
    weaponType: 'Sniper'
}
let lw3_tundra = {
    weaponName: 'LW3 - Tundra',
    weaponType: 'Sniper'
}
let m82 = {
    weaponName: 'M82',
    weaponType: 'Sniper'
}
let zrg_20mm = {
    weaponName: 'ZRG 20mm',
    weaponType: 'Sniper'
}
let swiss_k31 = {
    weaponName: 'Swiss K31',
    weaponType: 'Sniper'
}
let dragunov = {
    weaponName: 'Dragunov',
    weaponType: 'Sniper'
}
let hdr = {
    weaponName: 'HDR',
    weaponType: 'Sniper'
}
let ax_50 = {
    weaponName: 'AX-50',
    weaponType: 'Sniper'
}
let rytec_amr = {
    weaponName: 'Rytec AMR',
    weaponType: 'Sniper'
}

const sniper = [type_99, s3_line_rifle, kar98k_vg, gorenko_anti_tank_rifle, pelington_703, lw3_tundra, m82, zrg_20mm, swiss_k31, dragunov, hdr, ax_50, rytec_amr];

// Shotgun list
let einhorn_revolving = {
    weaponName: 'Einhorn Revolving',
    weaponType: 'Shotgun'
}
let combat_shotgun = {
    weaponName: 'Combat Shotgun',
    weaponType: 'Shotgun'
}
let gracey_auto = {
    weaponName: 'Gracey Auto',
    weaponType: 'Shotgun'
}
let double_barrel = {
    weaponName: 'Double Barrel',
    weaponType: 'Shotgun'
}
let hauer_77 = {
    weaponName: 'Hauer 77',
    weaponType: 'Shotgun'
}
let gallo_sa12 = {
    weaponName: 'Gallo SA12',
    weaponType: 'Shotgun'
}
let streetsweeper = {
    weaponName: 'Streetsweeper',
    weaponType: 'Shotgun'
}
let point_410_ironhide = {
    weaponName: '.410 Ironhide',
    weaponType: 'Shotgun'
}
let model_680 = {
    weaponName: 'Model 680',
    weaponType: 'Shotgun'
}
let r9_0_shotgun = {
    weaponName: 'R9-0 Shotgun',
    weaponType: 'Shotgun'
}
let sh725 = {
    weaponName: '725',
    weaponType: 'Shotgun'
}
let origin_12 = {
    weaponName: 'Origin 12',
    weaponType: 'Shotgun'
}
let vlk_rogue = {
    weaponName: 'VLK Rogue',
    weaponType: 'Shotgun'
}
let jak_12 = {
    weaponName: 'JAK-12',
    weaponType: 'Shotgun'
}

const shotgun = [einhorn_revolving, combat_shotgun, gracey_auto, double_barrel, hauer_77, gallo_sa12, streetsweeper, point_410_ironhide, model_680, r9_0_shotgun, sh725, origin_12, vlk_rogue, jak_12];

// Pistol list
let ratt = {
    weaponName: 'Ratt',
    weaponType: 'Pistol'
}
let top_break = {
    weaponName: 'Top Break',
    weaponType: 'Pistol'
}
let p1911_mw = {
    weaponName: '1911 (MW)',
    weaponType: 'Pistol'
}
let p1911_cw = {
    weaponName: '1911 (CW)',
    weaponType: 'Pistol'
}
let p1911_vg = {
    weaponName: '1911 (VG)',
    weaponType: 'Pistol'
}
let klauser = {
    weaponName: 'Klauser',
    weaponType: 'Pistol'
}
let machine_pistol = {
    weaponName: 'Machine Pistol',
    weaponType: 'Pistol'
}
let magnum = {
    weaponName: 'Magnum',
    weaponType: 'Pistol'
}
let diamatti = {
    weaponName: 'Diamatti',
    weaponType: 'Pistol'
}
let amp63 = {
    weaponName: 'AMP63',
    weaponType: 'Pistol'
}
let marshal = {
    weaponName: 'Marshal',
    weaponType: 'Pistol'
}
let x1 = {
    weaponName: 'X1',
    weaponType: 'Pistol'
}
let point_357 = {
    weaponName: '.357',
    weaponType: 'Pistol'
}
let m19 = {
    weaponName: 'M19',
    weaponType: 'Pistol'
}
let point_50_gs = {
    weaponName: '.50 GS',
    weaponType: 'Pistol'
}
let renetti = {
    weaponName: 'Renetti',
    weaponType: 'Pistol'
}
let sykov = {
    weaponName: 'Sykov',
    weaponType: 'Pistol'
}

const pistol = [ratt, top_break, p1911_mw, p1911_cw, p1911_vg, klauser, machine_pistol, magnum, diamatti, amp63, marshal, x1, point_357, m19, point_50_gs, renetti, sykov];

// Marksman list
let m1_garand = {
    weaponName: 'M1 Garand',
    weaponType: 'Marksman'
}
let svt_40 = {
    weaponName: 'SVT-40',
    weaponType: 'Marksman'
}
let g_43 = {
    weaponName: 'G-43',
    weaponType: 'Marksman'
}
let m1916 = {
    weaponName: 'M1916',
    weaponType: 'Marksman'
}
let ebr_14 = {
    weaponName: 'EBR-14',
    weaponType: 'Marksman'
}
let mk2_carbine = {
    weaponName: 'MK2 Carbine',
    weaponType: 'Marksman'
}
let kar98k_mw = {
    weaponName: 'Kar98k (MW)',
    weaponType: 'Marksman'
}
let crossbow = {
    weaponName: 'Crossbow',
    weaponType: 'Marksman'
}
let sks = {
    weaponName: 'SKS',
    weaponType: 'Marksman'
}
let spr_208 = {
    weaponName: 'SP-R 208',
    weaponType: 'Marksman'
}

const marksman = [m1_garand, svt_40, g_43, m1916, ebr_14, mk2_carbine, kar98k_mw, crossbow, sks, spr_208];

// Weapon types
let weaponTypes = [
    ar, 
    smg, 
    launcher, 
    lmg, 
    sniper, 
    marksman, 
    shotgun, 
    pistol
];

// Random weapon function
function RandomWeapon() {
    // Random weapon type
    randomWeaponType = Math.round(Math.random() * (weaponTypes.length -1));
    randomWeaponType = weaponTypes[randomWeaponType];

    // Random weapon from the selected type
    weapon = randomWeaponType;
    random = Math.round(Math.random() * (randomWeaponType.length -1));

    // Get weapon name and type
    weaponName = weapon[random].weaponName;
    weaponType = weapon[random].weaponType;
    console.log(weaponName +', '+ weaponType);
}

// Write to HTML
RandomWeapon();
document.querySelector("#weaponName1").textContent = weaponName;
document.querySelector("#weaponType1").textContent = weaponType;

RandomWeapon();
document.querySelector("#weaponName2").textContent = weaponName;
document.querySelector("#weaponType2").textContent = weaponType;