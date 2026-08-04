const elements = {
    boxes: document.querySelectorAll(".box")
}

console.log(elements.boxes);

let matrixCreate = new Array(4).fill().map(() => new Array(4).fill(""));
// console.log(matrixCreate);
let i = 0;
let boxesI = 0;
for(let row = 0; row < 4; row++) {
    for(let col = 0; col < 4; col++) {
        i++
        matrixCreate[row][col] = i;

        elements.boxes[boxesI].textContent = matrixCreate[row][col];

        boxesI++
    }
}

console.log(matrixCreate);