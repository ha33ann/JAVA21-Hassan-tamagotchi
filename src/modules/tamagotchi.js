export class Tamagotchi {
  #hungerLevel = 5;
  #happinessLevel = 5;
  #name;
  #type;

  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  getName() {
    return this.#name
  }
  getType() {
    return this.#type
  }

  getHungerLevel() {
    if(this.#hungerLevel <= 0){
      this.#hungerLevel = 0;
    }
    return this.#hungerLevel;
  }

  getHappinessLevel() {
    if (this.#happinessLevel >= 10) {
      this.#happinessLevel = 10;
    }
    return this.#happinessLevel;
  }

  hungerDrain() {
   const update = setInterval(() => {
      if (this.#hungerLevel < 10) {
        this.#hungerLevel += 1;
        document.querySelector("#pHunger").innerText = this.#hungerLevel;
        if(this.#hungerLevel === 8){
          const img = document.getElementById('bild');
        document.body.append(img);
        const imgUrl2 = new URL('../img/cow.png', import.meta.url);
        img.src = imgUrl2.href;
        img.width = 300;
        img.style.marginLeft = '700px';
        }
      }
      else if (this.#hungerLevel == 10) {
        clearInterval(update);

        const refresh = confirm("Tamagotchi has died");
        location.reload(true)
      }
    }, 3000);
  }

  happinessDrain() {
    const update2 = setInterval(() => {
      if (this.#happinessLevel > 0) {
        this.#happinessLevel -= 1;
        document.querySelector("#pHappy").innerText = this.#happinessLevel
        if(this.#happinessLevel === 2){
          const img = document.getElementById('bild');
        document.body.append(img);
        const imgUrl2 = new URL('../img/cow.png', import.meta.url);
        img.src = imgUrl2.href;
        img.width = 300;
        img.style.marginLeft = '700px';
        }
      }
      else if (this.#happinessLevel == 0) {
        clearInterval(update2);
        const refresh = confirm("Tamagotchi has died");
        location.reload(true)
      }
    }, 3000);
  }

  restartTama() {
    if (this.#happinessLevel == 0 || this.#hungerLevel == 10) {
      location.reload;
    }
  }


  feed() {
    this.#hungerLevel -= 1;
  }

  play() {
    this.#happinessLevel += 1;
  }

  isTamaDead() {
    if ((this.#happinessLevel == 0 || this.#hungerLevel == 10)) {
      return true;

    }
    else {
      return false;
    }
  }
}