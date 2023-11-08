// Problem 1: Let’s play a mind game

function mindGame(x) {
    let y = ((3 * x + 10) / 2) - 5;
    return y;
}
document.write(mindGame(50));

//Problem 2: Finding even or odd

function evenOdd(text) {
    if (text.length % 2 == 0) {
        return "even";
    }
    else {
        return "odd"
    };
}
document.write(evenOdd("Phero"));

// Problem 3: Is Less or Greater than seven


function isLGSeven(x) {
    let y = x - 7;
    if (y < 7) {
        return y;
    }
    else {
        return 2 * x;
    }
}
document.write(isLGSeven(6));


// Problem 4: Finding Bad data

const x = [1, -2, 5, -9, 3];

function findingBadData(value) {
    return value < 0;

}
const newArr = x.filter(findingBadData);
document.write(newArr.length);


//Problem 5: Convert your gems into diamond

let j = [20, 200, 50]
function gemsToDiamond(n) {
    const total = 21 * n[0] + 32 * n[1] + 43 * n[2]
    if (total > 2 * 1000) {
        return total - 2000;
    }
    else {
        return total;
    }

}
document.write(gemsToDiamond(j));