const isVerticalWin = (board, player) => {
    const copiedBoard = [...board];
    let isWin = false;

    // check if there are any occurance of player in upper row
    // if so push the indexes to new array
    const cellIndexesInFirstRow = [];
    copiedBoard[0].forEach((cell, index) => {
        if (cell === player) cellIndexesInFirstRow.push(index);
    })


    // check if there are any occurance of player in second row
    // if so push the indexes to new array
    const cellIndexesInSecondRow = [];
    copiedBoard[1].forEach((cell, index) => {
        if (cell === player) cellIndexesInSecondRow.push(index);
    })


    // if no occurance in either upper or second row there can't be 5 in a row vertically, return false
    if (cellIndexesInFirstRow.length === 0 && cellIndexesInSecondRow.length === 0) {
        console.log('Nothing in neither first nor second row');
        return false;
    };

    let amountInRow = 0;
    // start from the upper row and look if there's a vertical win
    if (cellIndexesInFirstRow.length > 0) {
        for (let cellIndex of cellIndexesInFirstRow) {
            if (amountInRow === 5) break;
            for (let i = 0; i < 5; i++) {
                if (copiedBoard[i][cellIndex] === player) {
                    console.log(`I rad ${i} och cellIndex ${cellIndex} är det === player`)
                    amountInRow += 1;
                } else {
                    console.log(`I rad ${i} och cellIndex ${cellIndex} är det !== player`)
                    amountInRow = 0;
                }
                if (amountInRow === 5) {
                    console.log('amountInRow === 5!!!!!!')
                    break;
                }
            }
        }
    }

    // start from the second row and look if there's a vertical win
    if (cellIndexesInSecondRow.length > 0) {
        for (let cellIndex of cellIndexesInSecondRow) {
            if (amountInRow === 5) break;
            for (let i = 0; i < 5; i++) {
                if (copiedBoard[i][cellIndex] === player) {
                    console.log(`I rad ${i} och cellIndex ${cellIndex} är det === player`)
                    amountInRow += 1;
                } else {
                    console.log(`I rad ${i} och cellIndex ${cellIndex} är det !== player`)
                    amountInRow = 0;
                }
                if (amountInRow === 5) {
                    console.log('amountInRow === 5!!!!!!')
                    break;
                }
            }
        }
    }

    if (amountInRow === 5) return true;
    return false;
};



const board = [
    ['x', 'x', '', '', '', 'x', ''],
    ['x', '', '', '', '', '', ''],
    ['x', '', '', '', '', '', ''],
    ['x', '', '', '', '', '', ''],
    ['x', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
];
console.log(isVerticalWin(board, 'x'));