const elements = {
    boxes: document.querySelectorAll(".box"),
    
    start: document.querySelector("#start"),
    clear: document.querySelector("#clear"),
};

let matrixCreate = new Array(4).fill().map(() => new Array(4).fill(""));
// let i = 0;
// let boxesI = 0;
// for(let row = 0; row < 4; row++) {
//     for(let col = 0; col < 4; col++) {
//     }
// };

const boxTwo = document.createElement("div");
boxTwo.classList.add("two");

elements.start.addEventListener("click", (e)=> {
    let rowRandom = Math.floor(Math.random() * 4);
    let colRandom = Math.floor(Math.random() * 4);

    let row2Random = Math.floor(Math.random() * 4);
    let col2Random = Math.floor(Math.random() * 4);


    if(matrixCreate[rowRandom][colRandom] === '' && matrixCreate[row2Random][col2Random] === '') {
        matrixCreate[rowRandom][colRandom] = boxTwo;
        matrixCreate[row2Random][col2Random] = boxTwo;
    }
    console.log(matrixCreate);

})

elements.clear.addEventListener("click", (e)=> {
   
for(let row = 0; row < 4; row++) {
    for(let col = 0; col < 4; col++) {
        matrixCreate[row][col] = ''
    }
};

console.log(matrixCreate, "clear");
})

// console.log(matrixCreate);