import { Tamagotchi } from "./modules/tamagotchi.js";


document.querySelector("#Submit").addEventListener("click", startMyTama);

function startMyTama(e) {
    e.preventDefault();

    let YourName = document.querySelector("#YourName").value;
    let TamaType = document.querySelector("#Type").value;
    let TamaName = document.querySelector('#TamaName').value;

    let myTamagotchi = new Tamagotchi();

    document.querySelector("#pYourName").innerText = YourName;
    document.querySelector("#pTamaName").innerText = TamaName;
    document.querySelector("#pType").innerText = TamaType;
    document.querySelector("#pHunger").innerText = myTamagotchi.getHungerLevel();
    document.querySelector("#pHappy").innerText = myTamagotchi.getHappinessLevel();

    myTamagotchi.hungerDrain();
    myTamagotchi.happinessDrain()

    document.querySelector("#feed").addEventListener("click", feedTama);
    document.querySelector("#play").addEventListener("click", playTama);

    function feedTama() {
        myTamagotchi.feed();
        document.querySelector("#pHunger").innerText = myTamagotchi.getHungerLevel();

    }

    function playTama() {
        myTamagotchi.play();
        document.querySelector("#pHappy").innerText = myTamagotchi.getHappinessLevel();
    }

    myTamagotchi.isTamaDead();
    myTamagotchi.restartTama();


    if (TamaType === "Dog") {
        const img = document.createElement('img');
        img.id = "bild";
        document.body.append(img);
        const imgUrl = new URL('./img/dog.png', import.meta.url);
        img.src = imgUrl.href;
        img.width = 300;
        img.style.marginLeft = '700px';
    }

    console.log(myTamagotchi.getHappinessLevel());
    if (myTamagotchi.getHungerLevel() >= 8 || myTamagotchi.getHappinessLevel() <= 2) {
        const img = document.getElementById('bild');
        document.body.append(img);
        const imgUrl2 = new URL('./img/cow.png', import.meta.url);
        img.src = imgUrl2.href;
        img.width = 300;
        img.style.marginLeft = '800px';
    }


}

