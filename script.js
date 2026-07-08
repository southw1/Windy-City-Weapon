/* =====================================
   WINDY CITY WEAPONS
   GTA ONLY WEAPON DATABASE
   PART 1/3
===================================== */


const weapons = {


/* =========================
   Tier 0
========================= */

tier 0:[

    {
        name:"Pistol",
        image:"images/pistol.jpeg",
        stats:"Damage:45 | Accuracy:70 | Range:45"
    },

    {
        name:"Pistol Mk II",
        image:"images/pistol_mk2.jpeg",
        stats:"Damage:50 | Accuracy:80 | Range:50"
    },

    {
        name:"Combat Pistol",
        image:"images/combat_pistol.jpeg",
        stats:"Damage:55 | Accuracy:85 | Range:55"
    },

    {
        name:"SNS Pistol",
        image:"images/sns_pistol.jpeg",
        stats:"Damage:45 | Accuracy:70 | Range:40"
    },

    {
        name:"SNS Pistol Mk II",
        image:"images/sns_pistol_mk2.jpeg",
        stats:"Damage:55 | Accuracy:75 | Range:45"
    },

    {
        name:"Heavy Pistol",
        image:"images/gta_heavy_pistol.jpeg",
        stats:"Damage:70 | Accuracy:70 | Range:60"
    },

    {
        name:"Vintage Pistol",
        image:"images/gta_vintage_pistol.jpeg",
        stats:"Damage:60 | Accuracy:75 | Range:55"
    },

    {
        name:"Ceramic Pistol",
        image:"images/gta_ceramic_pistol.jpeg",
        stats:"Damage:50 | Accuracy:70 | Range:45"
    }

],




/* =========================
   Tier 1
========================= */

tier 1:[

    {
        name:"Pistol",
        image:"images/gta_pistol.jpeg",
        stats:"Damage:45 | Accuracy:70 | Range:45"
    },

    {
        name:"Pistol Mk II",
        image:"images/gta_pistol_mk2.jpeg",
        stats:"Damage:50 | Accuracy:80 | Range:50"
    },

    {
        name:"Combat Pistol",
        image:"images/gta_combat_pistol.jpeg",
        stats:"Damage:55 | Accuracy:85 | Range:55"
    },

    {
        name:"SNS Pistol",
        image:"images/gta_sns_pistol.jpeg",
        stats:"Damage:45 | Accuracy:70 | Range:40"
    },

    {
        name:"SNS Pistol Mk II",
        image:"images/gta_sns_pistol_mk2.jpeg",
        stats:"Damage:55 | Accuracy:75 | Range:45"
    },

    {
        name:"Heavy Pistol",
        image:"images/gta_heavy_pistol.jpeg",
        stats:"Damage:70 | Accuracy:70 | Range:60"
    },

    {
        name:"Vintage Pistol",
        image:"images/gta_vintage_pistol.jpeg",
        stats:"Damage:60 | Accuracy:75 | Range:55"
    },

    {
        name:"Ceramic Pistol",
        image:"imagesgta_/ceramic_pistol.jpeg",
        stats:"Damage:50 | Accuracy:70 | Range:45"
    }

],/* =========================
   Tier 1.5
========================= */

tier 1.5:[

    {
        name:"SMG",
        image:"images/gta_smg.jpeg",
        stats:"Damage:70 | Accuracy:75 | Range:60"
    },

    {
        name:"SMG Mk II",
        image:"images/gta_smg_mk2.jpeg",
        stats:"Damage:75 | Accuracy:80 | Range:65"
    },

    {
        name:"Machine Pistol",
        image:"images/gta_machine_pistol.jpeg",
        stats:"Damage:65 | Accuracy:70 | Range:50"
    },

    {
        name:"AP Pistol",
        image:"images/gta_ap_pistol.jpeg",
        stats:"Damage:80 | Accuracy:85 | Range:60"
    },

    {
        name:"Pistol .50",
        image:"images/gta_pistol50.jpeg",
        stats:"Damage:85 | Accuracy:80 | Range:70"
    },

    {
        name:"Heavy Pistol",
        image:"images/gta_heavy_pistol.jpeg",
        stats:"Damage:70 | Accuracy:70 | Range:60"
    },

    {
        name:"WM 29 Pistol",
        image:"images/gta_wm29.jpeg",
        stats:"Damage:75 | Accuracy:80 | Range:65"
    },

    {
        name:"Compact Rifle",
        image:"images/gta_compact_rifle.jpeg",
        stats:"Damage:85 | Accuracy:70 | Range:65"
    },

    {
        name:"Heavy Rifle",
        image:"images/gta_heavy_rifle.jpeg",
        stats:"Damage:90 | Accuracy:85 | Range:75"
    }

],




/* =========================
   Tier 2
========================= */

tier 2:[

    {
        name:"Carbine Rifle",
        image:"images/gta_carbine_rifle.jpeg",
        stats:"Damage:90 | Accuracy:85 | Range:85"
    },

    {
        name:"Carbine Rifle Mk II",
        image:"images/gta_carbine_rifle_mk2.jpeg",
        stats:"Damage:95 | Accuracy:90 | Range:90"
    },

    {
        name:"Compact Rifle",
        image:"images/gta_compact_rifle.jpeg",
        stats:"Damage:85 | Accuracy:70 | Range:65"
    },

    {
        name:"AP Pistol",
        image:"images/gta_ap_pistol.jpeg",
        stats:"Damage:80 | Accuracy:85 | Range:60"
    },

    {
        name:"Micro SMG",
        image:"images/gta_micro_smg.jpeg",
        stats:"Damage:75 | Accuracy:80 | Range:50"
    },

    {
        name:"Tactical SMG",
        image:"images/gta_tactical_smg.jpeg",
        stats:"Damage:80 | Accuracy:75 | Range:55"
    },

    {
        name:"Combat PDW",
        image:"images/gta_combat_pdw.jpeg",
        stats:"Damage:85 | Accuracy:85 | Range:70"
    }

]


};/* =====================================
   WINDY CITY WEAPONS
   PART 3/3
   SPINNER SYSTEM
===================================== */


/* CURRENT TIER */

let currentTier = "tier0";

let currentWeaponPool = weapons[currentTier];




/* HOW MANY WEAPONS SHOW DURING SPIN */

const spinLimits = {

    tier0: 2,

    tier1: 4,

    tier15: 4,

    tier2: 6

};





/* =========================
   SHOW TIER WEAPONS
========================= */

function showTier(tier){


    currentTier = tier;


    currentWeaponPool = weapons[tier];



    let weaponList =
    document.getElementById("weaponList");


    let currentPool =
    document.getElementById("currentPool");



    weaponList.innerHTML = "";



    currentWeaponPool.forEach(function(weapon){


        let li =
        document.createElement("li");


        li.innerHTML =
        "🔫 " + weapon.name;


        weaponList.appendChild(li);


    });




    currentPool.innerHTML = `

        <h3>${tier.toUpperCase()}</h3>

        <p>
        Total Weapons:
        ${currentWeaponPool.length}
        </p>

        <p>
        Spin Pool:
        ${spinLimits[tier]} weapons
        </p>

    `;


}







/* =========================
   SPIN WEAPON
========================= */

function randomizeWeapon(){


    if(currentWeaponPool.length === 0){

        return;

    }



    let spinPool = [];

    let available =

    [...currentWeaponPool];



    let amount =

    spinLimits[currentTier];





    // PICK RANDOM WEAPONS

    for(let i = 0; i < amount; i++){


        let randomIndex =

        Math.floor(

        Math.random()

        *

        available.length

        );



        spinPool.push(

        available[randomIndex]

        );



        available.splice(

        randomIndex,

        1

        );


    }





    // FINAL WINNER

    let winner =

    spinPool[

        Math.floor(

        Math.random()

        *

        spinPool.length

        )

    ];







    let weaponImage =

    document.getElementById("weaponImage");


    let weaponName =

    document.getElementById("weaponName");


    let weaponStats =

    document.getElementById("weaponStats");





    let spinCount = 0;



    let spinner = setInterval(function(){



        let randomWeapon =

        currentWeaponPool[

            Math.floor(

            Math.random()

            *

            currentWeaponPool.length

            )

        ];



        weaponImage.src =

        randomWeapon.image;



        weaponName.innerHTML =

        randomWeapon.name;



        weaponStats.innerHTML =

        "Spinning...";





        spinCount++;





        if(spinCount >= 25){



            clearInterval(spinner);




            weaponImage.src =

            winner.image;



            weaponName.innerHTML =

            winner.name;



            weaponStats.innerHTML =

            winner.stats;



        }



    },100);



}







/* =========================
   LOAD DEFAULT TIER
========================= */

window.onload = function(){


    showTier("tier 0");
    showTier("tier 1");
    showTier("tier 1.5");
    showTier("tier 2");




};
