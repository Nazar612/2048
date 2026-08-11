const elements = {
    boxes: document.querySelectorAll(".box"),
    game_tableau: document.querySelector(".game_tableau"),
    start: document.querySelector("#start"),
    clear: document.querySelector("#clear"),
};

let matrixCreate = new Array(4).fill().map(() => new Array(4).fill(0));
const boxesMassive = elements.boxes;
let i = 0;
console.log(boxesMassive);



elements.start.addEventListener("click", (e)=> {
    let rowRandom = Math.floor(Math.random() * 4);
    let colRandom = Math.floor(Math.random() * 4);

    let row2Random = Math.floor(Math.random() * 4);
    let col2Random = Math.floor(Math.random() * 4);


    if(matrixCreate[rowRandom][colRandom] === 0 && matrixCreate[row2Random][col2Random] === 0) {
        matrixCreate[rowRandom][colRandom] = 2;
        matrixCreate[row2Random][col2Random] = 2;
        console.log(matrixCreate);

        for(let row = 0; row < 4; row++) {
    for(let col = 0; col < 4; col++) {
        if(matrixCreate[row][col] !== 0) {
            boxesMassive[i].innerHTML = `<div class="two">2</div>`
            console.log(i);
        }
        i++;
    }
};
    };

//     for(let row = 0; row < 4; row++) {
//     for(let col = 0; col < 4; col++) {
//         if(boxTwo.textContent !== 0) {
            
//         }
//     }
// };

})

elements.clear.addEventListener("click", (e)=> {
   
for(let row = 0; row < 4; row++) {
    for(let col = 0; col < 4; col++) {
        matrixCreate[row][col] = 0;
    }
};

console.log(matrixCreate, "clear");
})

// console.log(matrixCreate);