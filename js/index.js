const elements = {
    boxes: document.querySelectorAll(".box"),
    game_tableau: document.querySelector(".game_tableau"),
    start: document.querySelector("#start"),
    clear: document.querySelector("#clear"),
};
let counter = 0
let matrix = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

// for (let r = 0; r < 4; r++) {
//         for(let c = 0; c <4; c++) {
            
//         }
//     }

function generateRandomCoord() {
    let rowRand = Math.floor(Math.random() * 4);
    let colRand = Math.floor(Math.random() * 4);
    
    matrix[rowRand][colRand] = 2;

    
};
elements.start.addEventListener("click", (e)=> {
    if(counter >= 1) {
        location.reload()
    }
    generateRandomCoord();
    generateRandomCoord();
    counter += 1
});

elements.clear.addEventListener("click", (e)=> {
    for (let r = 0; r < 4; r++) {
        for(let c = 0; c <4; c++) {
            matrix[r][c] = 0
        }
    };
});

document.addEventListener("keydown", (e)=> {
    //Right
    if(e.code === "KeyD") {
        // let i = 3
        for (let r = 0; r < 4; r++) {
            // if(matrix[r][i] !== 0) {
            //     i--
            // }else{
            //     matrix[r][i] = 1
            //     console.log(matrix);
            // }
        for(let c = 0; c <4; c++) {
        }
    }
    }
})