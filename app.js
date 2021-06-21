
const dieBtn = document.getElementById("main-button");
const dieContainer = document.getElementById("die-container");
let diceArray = [];
const rollDice = document.getElementById("rollDice");
const sumDice = document.getElementById("sumDice");


dieBtn.addEventListener("click", () => new Die());

rollDice.addEventListener("click", () => {
    diceArray.forEach(die => {
        die.roll();
    });
});

sumDice.addEventListener("click", () => {
    let sum = 0;
    diceArray.forEach(die => sum += die.value);
    alert(sum);
});

class Die {
    constructor() {
        this.div = document.createElement("div");
        this.div.className = "die";
        this.roll();
        dieContainer.appendChild(this.div);
        diceArray.push(this);
        this.div.addEventListener("click", () => this.roll());
        this.div.addEventListener("dblclick", () =>{
            container.removeChild(this.div);
            diceArray.splice(diceArray.indexOf(this), 1);
        });
        // this.div.style.left = '25px';
        // this.div.style.top = '25px';
        // this.div.style.width = '25px';
        // this.div.style.height = '25px';
    }
    roll(){
        const randomNum = Math.floor((Math.random() * 6) + 1);
        this.value = randomNum;
        this.getChar();
        this.div.innerText = this.char;
    }
    getChar() {
                    if (this.value === 1) {
                        this.char = "⚀";
                    } else if (this.value === 2) {
                        this.char = "⚁"
                    } else if (this.value === 3) {
                        this.char = "⚂";
                    } else if (this.value === 4) {
                        this.char = "⚃";
                    } else if (this.value === 5) {
                        this.char = "⚄";
                    } else {
                        this.char = "⚅";
                    }
                }
}



