/* =================================
   WINDY CITY WEAPONS
   COMPLETE SCRIPT
   PART 1 - WEAPON DATABASE
================================= */


const weapons = {


/* ======================
   TIER 0
   SAME AS TIER 1
====================== */

tier 0: [

{
name:"Pistol - Beretta",
image:"images/beretta.png",
stats:"Damage:45 | Accuracy:70 | Range:45"
},

{
name:"Pistol Mk II - Glock 45",
image:"images/glock45.png",
stats:"Damage:50 | Accuracy:85 | Range:50"
},

{
name:"Combat Pistol - G19x",
image:"images/g19x.png",
stats:"Damage:55 | Accuracy:85 | Range:55"
},

{
name:"SNS Pistol - Walter P90",
image:"images/walter-p90.png",
stats:"Damage:60 | Accuracy:75 | Range:55"
},

{
name:"SNS Pistol Mk II - Hellcat",
image:"images/hellcat.png",
stats:"Damage:52 | Accuracy:82 | Range:50"
},

{
name:"Heavy Pistol - FN",
image:"images/fn.png",
stats:"Damage:70 | Accuracy:70 | Range:65"
},

{
name:"Vintage Pistol - Glock 41",
image:"images/glock41.png",
stats:"Damage:60 | Accuracy:80 | Range:55"
},

{
name:"Ceramic Pistol - SigP230",
image:"images/sigp230.png",
stats:"Damage:50 | Accuracy:75 | Range:45"
}

],




/* ======================
   TIER 1
====================== */

tier 1: [

{
name:"Pistol - Beretta",
image:"images/beretta.png",
stats:"Damage:45 | Accuracy:70 | Range:45"
},

{
name:"Pistol Mk II - Glock 45",
image:"images/glock45.png",
stats:"Damage:50 | Accuracy:85 | Range:50"
},

{
name:"Combat Pistol - G19x",
image:"images/g19x.png",
stats:"Damage:55 | Accuracy:85 | Range:55"
},

{
name:"SNS Pistol - Walter P90",
image:"images/walter-p90.png",
stats:"Damage:60 | Accuracy:75 | Range:55"
},

{
name:"SNS Pistol Mk II - Hellcat",
image:"images/hellcat.png",
stats:"Damage:52 | Accuracy:82 | Range:50"
},

{
name:"Heavy Pistol - FN",
image:"images/fn.png",
stats:"Damage:70 | Accuracy:70 | Range:65"
},

{
name:"Vintage Pistol - Glock 41",
image:"images/glock41.png",
stats:"Damage:60 | Accuracy:80 | Range:55"
},

{
name:"Ceramic Pistol - SigP230",
image:"images/sigp230.png",
stats:"Damage:50 | Accuracy:75 | Range:45"
}

],




/* ======================
   TIER 1.5
====================== */

tier 1.5: [

{
name:"SMG - Banshee ARP",
image:"images/banshee-arp.png",
stats:"Damage:70 | Accuracy:75 | Range:60"
},

{
name:"SMG Mk II - 4 Inch ARP (FRT)",
image:"images/4inch-arp.png",
stats:"Damage:75 | Accuracy:80 | Range:65"
},

{
name:"Machine Pistol - Tec 9",
image:"images/tec9.png",
stats:"Damage:65 | Accuracy:70 | Range:50"
},

{
name:"AP Pistol - G47 Switch",
image:"images/g47-switch.png",
stats:"Damage:80 | Accuracy:85 | Range:60"
},

{
name:"Pistol .50 - FN 57",
image:"images/fn57.png",
stats:"Damage:85 | Accuracy:80 | Range:70"
},

{
name:"Heavy Pistol - FN",
image:"images/fn.png",
stats:"Damage:70 | Accuracy:70 | Range:65"
},

{
name:"WM 29 Pistol - Glock 30",
image:"images/glock30.png",
stats:"Damage:65 | Accuracy:75 | Range:55"
},

{
name:"Compact Rifle - Micro Draco",
image:"images/micro-draco.png",
stats:"Damage:85 | Accuracy:65 | Range:60"
},

{
name:"Heavy Rifle - Honey Badger",
image:"images/honey-badger.png",
stats:"Damage:90 | Accuracy:85 | Range:75"
}

],




/* ======================
   TIER 2
====================== */

tier 2: [

{
name:"Carbine Rifle - 300 Blackout",
image:"images/300-blackout.png",
stats:"Damage:90 | Accuracy:85 | Range:85"
},

{
name:"Carbine Rifle Mk II - Micro ARP",
image:"images/micro-arp.png",
stats:"Damage:85 | Accuracy:80 | Range:70"
},

{
name:"Compact Rifle - Black Draco",
image:"images/black-draco.png",
stats:"Damage:90 | Accuracy:70 | Range:65"
},

{
name:"AP Pistol - G47 Switch",
image:"images/g47-switch.png",
stats:"Damage:80 | Accuracy:85 | Range:60"
},

{
name:"Micro SMG - Kriss Vector",
image:"images/kriss-vector.png",
stats:"Damage:85 | Accuracy:90 | Range:65"
},

{
name:"Tactical SMG - Mac 10",
image:"images/mac10.png",
stats:"Damage:75 | Accuracy:70 | Range:55"
},

{
name:"Combat PDW - DDM4",
image:"images/ddm4.png",
stats:"Damage:90 | Accuracy:85 | Range:80"
}

];/* =================================
   WINDY CITY WEAPONS
   COMPLETE SCRIPT
   PART 2 - WEBSITE FUNCTIONS
================================= */


/* CURRENT SETTINGS */

let currentTier = "tier1";

let currentWeaponPool = weapons[currentTier];



/* HOW MANY WEAPONS APPEAR IN SPIN */

const spinLimits = {

    tier0: 2,

    tier1: 4,

    tier15: 4,

    tier2: 6

};




/* ======================
   LOAD TIER
====================== */


function showTier(tier){


    currentTier = tier;


    currentWeaponPool = weapons[tier];



    const weaponList =
    document.getElementById("weaponList");


    const currentPool =
    document.getElementById("currentPool");



    weaponList.innerHTML = "";


    currentPool.innerHTML = "";




    currentWeaponPool.forEach((weapon)=>{


        let item =
        document.createElement("li");


        item.innerHTML =

        `
         ${weapon.name}
        `;


        weaponList.appendChild(item);


    });





    currentPool.innerHTML =

    `

    <h3>${tier.toUpperCase()}</h3>

    <p>
    Total Weapons: ${currentWeaponPool.length}
    </p>

    <p>
    Spin Pool: ${spinLimits[tier]} Weapons
    </p>

    `;


}






/* ======================
   SPIN WEAPON
====================== */


function randomizeWeapon(){



    if(currentWeaponPool.length === 0){


        alert(
        "This tier has no weapons."
        );


        return;

    }




    let spinPool = [];



    let amount = spinLimits[currentTier];




    for(let i = 0; i < amount; i++){



        let random = Math.floor(

            Math.random()

            *

            currentWeaponPool.length

        );



        spinPool.push(

            currentWeaponPool[random]

        );



    }





    let winner =

    spinPool[

        Math.floor(

        Math.random()

        *

        spinPool.length

        )

    ];






    document.getElementById("weaponName")
    .innerHTML =

    winner.name;





    document.getElementById("weaponImage")
    .src =

    winner.image;





    document.getElementById("weaponStats")
    .innerHTML =

    winner.stats;



}





/* ======================
   SPIN ANIMATION EFFECT
====================== */


function spinAnimation(){


    let name =

    document.getElementById("weaponName");



    name.innerHTML = "SPINNING...";



    setTimeout(()=>{


        randomizeWeapon();


    },1500);



}




/* ======================
   CONNECT BUTTONS
====================== */


document.addEventListener(

"DOMContentLoaded",

()=>{


    showTier("tier 0");
    showTier("tier 1");
    showTier("tier 1.5");
    showTier("tier 2");

}

);
