/* =================================
   WINDY CITY WEAPONS
   COMPLETE SCRIPT
================================= */


/* ======================
   WEAPON DATABASE
====================== */

const weapons = {


    /* TIER 0 */

tier0: [

    {
        name:"Pistol - Beretta",
        image:"images/beretta.png",
        stats:"Damage: 45 | Accuracy: 70 | Range: 45"
    },

    {
        name:"Pistol Mk II - Glock 45",
        image:"images/glock45.png",
        stats:"Damage: 50 | Accuracy: 85 | Range: 50"
    },

    {
        name:"Combat Pistol - G19x",
        image:"images/g19x.png",
        stats:"Damage: 55 | Accuracy: 85 | Range: 55"
    },

    {
        name:"SNS Pistol - Walter P90",
        image:"images/walter-p90.png",
        stats:"Damage: 60 | Accuracy: 75 | Range: 55"
    },

    {
        name:"SNS Pistol Mk II - Hellcat",
        image:"images/hellcat.png",
        stats:"Damage: 52 | Accuracy: 82 | Range: 50"
    },

    {
        name:"Heavy Pistol - FN",
        image:"images/fn.png",
        stats:"Damage: 70 | Accuracy: 70 | Range: 65"
    },

    {
        name:"Vintage Pistol - Glock 41",
        image:"images/glock41.png",
        stats:"Damage: 60 | Accuracy: 80 | Range: 55"
    },

    {
        name:"Ceramic Pistol - SigP230",
        image:"images/sigp230.png",
        stats:"Damage: 50 | Accuracy: 75 | Range: 45"
    }

],



    /* TIER 1 */

    tier1: [

        {
            name:"Pistol - Beretta",
            image:"images/beretta.png",
            stats:"Damage: 45 | Accuracy: 70 | Range: 45"
        },

        {
            name:"Pistol Mk II - Glock 45",
            image:"images/glock45.png",
            stats:"Damage: 50 | Accuracy: 85 | Range: 50"
        },

        {
            name:"Combat Pistol - G19x",
            image:"images/g19x.png",
            stats:"Damage: 55 | Accuracy: 85 | Range: 55"
        },

        {
            name:"SNS Pistol - Walter P90",
            image:"images/walter-p90.png",
            stats:"Damage: 60 | Accuracy: 75 | Range: 55"
        },

        {
            name:"SNS Pistol Mk II - Hellcat",
            image:"images/hellcat.png",
            stats:"Damage: 52 | Accuracy: 82 | Range: 50"
        },

        {
            name:"Heavy Pistol - FN",
            image:"images/fn.png",
            stats:"Damage: 70 | Accuracy: 70 | Range: 65"
        },

        {
            name:"Vintage Pistol - Glock 41",
            image:"images/glock41.png",
            stats:"Damage: 60 | Accuracy: 80 | Range: 55"
        },

        {
            name:"Ceramic Pistol - SigP230",
            image:"images/sigp230.png",
            stats:"Damage: 50 | Accuracy: 75 | Range: 45"
        }

    ],




    /* TIER 1.5 */

    tier15: [

        {
            name:"SMG - Banshee ARP",
            image:"images/banshee-arp.png",
            stats:"Damage: 70 | Accuracy: 75 | Range: 60"
        },

        {
            name:"SMG Mk II - 4 Inch ARP (FRT)",
            image:"images/4inch-arp.png",
            stats:"Damage: 75 | Accuracy: 80 | Range: 65"
        },

        {
            name:"Machine Pistol - Tec 9",
            image:"images/tec9.png",
            stats:"Damage: 65 | Accuracy: 70 | Range: 50"
        },

        {
            name:"AP Pistol - G47 Switch",
            image:"images/g47-switch.png",
            stats:"Damage: 80 | Accuracy: 85 | Range: 60"
        },

        {
            name:"Pistol .50 - FN 57",
            image:"images/fn57.png",
            stats:"Damage: 85 | Accuracy: 80 | Range: 70"
        },

        {
            name:"Heavy Pistol - FN",
            image:"images/fn.png",
            stats:"Damage: 70 | Accuracy: 70 | Range: 65"
        },

        {
            name:"WM 29 Pistol - Glock 30",
            image:"images/glock30.png",
            stats:"Damage: 65 | Accuracy: 75 | Range: 55"
        },

        {
            name:"Compact Rifle - Micro Draco",
            image:"images/micro-draco.png",
            stats:"Damage: 85 | Accuracy: 65 | Range: 60"
        },

        {
            name:"Heavy Rifle - Honey Badger",
            image:"images/honey-badger.png",
            stats:"Damage: 90 | Accuracy: 85 | Range: 75"
        }

    ],




    /* TIER 2 */

    tier2: [

        {
            name:"Carbine Rifle - 300 Blackout",
            image:"images/300-blackout.png",
            stats:"Damage: 90 | Accuracy: 85 | Range: 85"
        },

        {
            name:"Carbine Rifle Mk II - Micro ARP",
            image:"images/micro-arp.png",
            stats:"Damage: 85 | Accuracy: 80 | Range: 70"
        },

        {
            name:"Compact Rifle - Black Draco",
            image:"images/black-draco.png",
            stats:"Damage: 90 | Accuracy: 70 | Range: 65"
        },

        {
            name:"AP Pistol - G47 Switch",
            image:"images/g47-switch.png",
            stats:"Damage: 80 | Accuracy: 85 | Range: 60"
        },

        {
            name:"Micro SMG - Kriss Vector",
            image:"images/kriss-vector.png",
            stats:"Damage: 85 | Accuracy: 90 | Range: 65"
        },

        {
            name:"Tactical SMG - Mac 10",
            image:"images/mac10.png",
            stats:"Damage: 75 | Accuracy: 70 | Range: 55"
        },

        {
            name:"Combat PDW - DDM4",
            image:"images/ddm4.png",
            stats:"Damage: 90 | Accuracy: 85 | Range: 80"
        }

    ]

};





/* ======================
   SPIN SETTINGS
====================== */


let currentTier = "tier1";

let currentWeaponPool = weapons[currentTier];

let selectedWeapons = [];



const spinLimits = {

    tier0:2,

    tier1:4,

    tier15:4,

    tier2:6

};





/* ======================
   CHANGE TIER
====================== */


function showTier(tier){


    currentTier = tier;

    currentWeaponPool = weapons[tier];

    selectedWeapons = [];



    let list =
    document.getElementById("weaponList");


    let pool =
    document.getElementById("currentPool");



    list.innerHTML="";

    pool.innerHTML="";



    currentWeaponPool.forEach((weapon,index)=>{


        let li =
        document.createElement("li");



        li.innerHTML = `

        <input type="checkbox"
        onchange="selectWeapon(${index},this)">

        ${weapon.name}

        `;



        list.appendChild(li);


    });



    pool.innerHTML =

    `
    <h3>${tier.toUpperCase()}</h3>
    <p>Select ${spinLimits[tier]} weapons</p>
    `;


}





/* ======================
   SELECT WEAPON
====================== */


function selectWeapon(index,checkbox){


    let weapon =
    currentWeaponPool[index];



    if(checkbox.checked){


        if(selectedWeapons.length < spinLimits[currentTier]){


            selectedWeapons.push(weapon);


        }

        else{


            checkbox.checked=false;


            alert(
            "Maximum weapons selected"
            );


        }


    }


    else{


        selectedWeapons =
        selectedWeapons.filter(
            item => item !== weapon
        );


    }



    updatePool();


}





/* ======================
   UPDATE DISPLAY
====================== */


function updatePool(){


    let pool =
    document.getElementById("currentPool");


    pool.innerHTML =
    "<h3>Selected Weapons</h3>";



    selectedWeapons.forEach(weapon=>{


        pool.innerHTML +=

        `<p>🔫 ${weapon.name}</p>`;


    });


}





/* ======================
   SPIN
====================== */


function randomizeWeapon(){


    if(selectedWeapons.length===0){

        alert(
        "Select weapons first"
        );

        return;

    }



    let random = Math.floor(

        Math.random() *
        selectedWeapons.length

    );



    let weapon =
    selectedWeapons[random];



    document.getElementById("weaponName")
    .innerHTML =
    weapon.name;



    document.getElementById("weaponImage")
    .src =
    weapon.image;



    document.getElementById("weaponStats")
    .innerHTML =
    weapon.stats;


}





/* LOAD DEFAULT */

showTier("tier0");
showTier("tier1");
showTier("tier1.5");
showTier("tier2");
