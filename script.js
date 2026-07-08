/* =====================================
   WINDY CITY WEAPONS
   CLEAN SCRIPT
   PART 1 - WEAPON DATABASE
===================================== */


const weapons = {


    // =========================
    // TIER 0
    // =========================

    tier0: [

        {
            name: "Pistol - Beretta",
            image: "images/Beretta.jpeg",
            stats: "Damage: 45 | Accuracy: 70 | Range: 45"
        },

        {
            name: "Pistol Mk II - Glock 45",
            image: "images/Glock45.jpeg",
            stats: "Damage: 50 | Accuracy: 85 | Range: 50"
        },

        {
            name: "Combat Pistol - G19x",
            image: "images/G19x.jpeg",
            stats: "Damage: 55 | Accuracy: 85 | Range: 55"
        },

        {
            name: "SNS Pistol - Walter P90",
            image: "images/WalterP90.jpeg",
            stats: "Damage: 60 | Accuracy: 75 | Range: 55"
        },

        {
            name: "SNS Pistol Mk II - Hellcat",
            image: "images/Hellcat.jpeg",
            stats: "Damage: 52 | Accuracy: 82 | Range: 50"
        },

        {
            name: "Heavy Pistol - FN",
            image: "images/FN.jpeg",
            stats: "Damage: 70 | Accuracy: 70 | Range: 65"
        },

        {
            name: "Vintage Pistol - Glock 41",
            image: "images/Glock41.jpeg",
            stats: "Damage: 60 | Accuracy: 80 | Range: 55"
        },

        {
            name: "Ceramic Pistol - SigP230",
            image: "images/SigP230.jpeg",
            stats: "Damage: 50 | Accuracy: 75 | Range: 45"
        }

    ],




    // =========================
    // TIER 1
    // =========================

    tier1: [

        {
            name: "Pistol - Beretta",
            image: "images/Beretta.jpeg",
            stats: "Damage: 45 | Accuracy: 70 | Range: 45"
        },

        {
            name: "Pistol Mk II - Glock 45",
            image: "images/Glock45.jpeg",
            stats: "Damage: 50 | Accuracy: 85 | Range: 50"
        },

        {
            name: "Combat Pistol - G19x",
            image: "images/G19x.jpeg",
            stats: "Damage: 55 | Accuracy: 85 | Range: 55"
        },

        {
            name: "SNS Pistol - Walter P90",
            image: "images/WalterP90.jpeg",
            stats: "Damage: 60 | Accuracy: 75 | Range: 55"
        },

        {
            name: "SNS Pistol Mk II - Hellcat",
            image: "images/Hellcat.jpeg",
            stats: "Damage: 52 | Accuracy: 82 | Range: 50"
        },

        {
            name: "Heavy Pistol - FN",
            image: "images/FN.jpeg",
            stats: "Damage: 70 | Accuracy: 70 | Range: 65"
        },

        {
            name: "Vintage Pistol - Glock 41",
            image: "images/Glock41.jpeg",
            stats: "Damage: 60 | Accuracy: 80 | Range: 55"
        },

        {
            name: "Ceramic Pistol - SigP230",
            image: "images/SigP230.jpeg",
            stats: "Damage: 50 | Accuracy: 75 | Range: 45"
        }

    ],/* =========================
   TIER 1.5
========================= */


tier15: [

    {
        name:"SMG - Banshee ARP",
        image:"images/BansheeARP.jpeg",
        stats:"Damage:70 | Accuracy:75 | Range:60"
    },

    {
        name:"SMG Mk II - 4 Inch ARP (FRT)",
        image:"images/4InchARP.jpeg",
        stats:"Damage:75 | Accuracy:80 | Range:65"
    },

    {
        name:"Machine Pistol - Tec 9",
        image:"images/Tec9.jpeg",
        stats:"Damage:65 | Accuracy:70 | Range:50"
    },

    {
        name:"AP Pistol - G47 Switch",
        image:"images/G47Switch.jpeg",
        stats:"Damage:80 | Accuracy:85 | Range:60"
    },

    {
        name:"Pistol .50 - FN 57",
        image:"images/FN57.jpeg",
        stats:"Damage:85 | Accuracy:80 | Range:70"
    },

    {
        name:"Heavy Pistol - FN",
        image:"images/FN.jpeg",
        stats:"Damage:70 | Accuracy:70 | Range:65"
    },

    {
        name:"WM 29 Pistol - Glock 30",
        image:"images/Glock30.jpeg",
        stats:"Damage:65 | Accuracy:75 | Range:55"
    },

    {
        name:"Compact Rifle - Micro Draco",
        image:"images/MicroDraco.jpeg",
        stats:"Damage:85 | Accuracy:65 | Range:60"
    },

    {
        name:"Heavy Rifle - Honey Badger",
        image:"images/HoneyBadger.jpeg",
        stats:"Damage:90 | Accuracy:85 | Range:75"
    }

],




/* =========================
   TIER 2
========================= */


tier2: [

    {
        name:"Carbine Rifle - 300 Blackout",
        image:"images/300Blackout.jpeg",
        stats:"Damage:90 | Accuracy:85 | Range:85"
    },

    {
        name:"Carbine Rifle Mk II - Micro ARP",
        image:"images/MicroARP.jpeg",
        stats:"Damage:85 | Accuracy:80 | Range:70"
    },

    {
        name:"Compact Rifle - Black Draco",
        image:"images/BlackDraco.jpeg",
        stats:"Damage:90 | Accuracy:70 | Range:65"
    },

    {
        name:"AP Pistol - G47 Switch",
        image:"images/G47Switch.jpeg",
        stats:"Damage:80 | Accuracy:85 | Range:60"
    },

    {
        name:"Micro SMG - Kriss Vector",
        image:"images/KrissVector.jpeg",
        stats:"Damage:85 | Accuracy:90 | Range:65"
    },

    {
        name:"Tactical SMG - Mac 10",
        image:"images/Mac10.jpeg",
        stats:"Damage:75 | Accuracy:70 | Range:55"
    },

    {
        name:"Combat PDW - DDM4",
        image:"images/DDM4.jpeg",
        stats:"Damage:90 | Accuracy:85 | Range:80"
    }

]


};/* =====================================
   WINDY CITY WEAPONS
   PART 3 - FUNCTIONS & SPINNER
===================================== */


/* CURRENT SETTINGS */

let currentTier = "tier1";

let currentWeaponPool = weapons[currentTier];



/* SPIN AMOUNT */

const spinLimits = {

    tier0: 2,

    tier1: 4,

    tier15: 4,

    tier2: 6

};




/* =========================
   LOAD TIER
========================= */

function showTier(tier){


    currentTier = tier;


    currentWeaponPool = weapons[tier];



    const weaponList =
    document.getElementById("weaponList");


    const currentPool =
    document.getElementById("currentPool");



    weaponList.innerHTML = "";



    currentWeaponPool.forEach((weapon)=>{


        let item =
        document.createElement("li");


        item.innerHTML =
        "🔫 " + weapon.name;


        weaponList.appendChild(item);


    });



    currentPool.innerHTML = `

        <h3>${tier.toUpperCase()}</h3>

        <p>
        Weapons Available:
        ${currentWeaponPool.length}
        </p>

        <p>
        Spin Pool:
        ${spinLimits[tier]} Weapons
        </p>

    `;


}






/* =========================
   SPIN BUTTON
========================= */


function randomizeWeapon(){



    if(currentWeaponPool.length === 0){

        alert("No weapons in this tier");

        return;

    }



    let spinPool = [];

    let available =
    [...currentWeaponPool];



    let amount =
    spinLimits[currentTier];




    // Automatically choose weapons

    for(let i = 0; i < amount; i++){


        let random = Math.floor(

            Math.random()

            *

            available.length

        );


        spinPool.push(

            available[random]

        );


        available.splice(random,1);


    }





    let winner =

    spinPool[

        Math.floor(

        Math.random()

        *

        spinPool.length

        )

    ];





    let weaponName =
    document.getElementById("weaponName");


    let weaponImage =
    document.getElementById("weaponImage");


    let weaponStats =
    document.getElementById("weaponStats");





    let count = 0;


    let animation = setInterval(()=>{


        let fakeWeapon =

        currentWeaponPool[

            Math.floor(

            Math.random()

            *

            currentWeaponPool.length

            )

        ];



        weaponName.innerHTML =
        fakeWeapon.name;



        weaponImage.src =
        fakeWeapon.image;



        weaponStats.innerHTML =
        "Rolling...";



        count++;



        if(count >= 20){


            clearInterval(animation);



            weaponName.innerHTML =
            winner.name;



            weaponImage.src =
            winner.image;



            weaponStats.innerHTML =
            winner.stats;



        }



    },100);



}






/* =========================
   DEFAULT LOAD
========================= */


window.onload = function(){


    showTier("tier1");


};
