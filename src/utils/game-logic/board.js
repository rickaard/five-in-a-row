export const board = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
];

export const isHorizontalWin = (board, player) => {
    const copiedBoard = [...board];
    let isWin = false;
    copiedBoard.forEach(row => {
        let amountInRow = 0;
        for (let cell of row) {
            if (cell === player) {
                amountInRow += 1;
            } else {
                amountInRow = 0;
            }
            if (amountInRow === 5) {
                isWin = true;
                break;
            };
        }
    })

    return isWin;
};


export const isVerticalWin = (board, player) => {
    // const board = [
    //     ['x', '', '', '', '', '', ''],
    //     ['x', '', '', '', '', '', ''],
    //     ['x', '', '', '', '', '', ''],
    //     ['x', '', '', '', '', '', ''],
    //     ['x', '', '', '', '', '', ''],
    //     ['', '', '', '', '', '', ''],
    // ];
    const copiedBoard = [...board];
    let isWin = false;

    // check if there are any occurance of player in upper row
    const cellIndexesInFirstRow = copiedBoard[0].map((cell, index) => {
        if (cell === player) return index;
    })

    // check if there are any occurance of player in second upper row
    const cellIndexesInSecondRow = copiedBoard[1].map((cell, index) => {
        if (cell === player) return index;
    })

    // if no occurance in either upper or second row there can't be 5 in a row vertically, return false
    if (cellIndexesInFirstRow.length === 0 && cellIndexesInSecondRow.length === 0) return false;

    let amountInRow = 0;
    if (cellIndexesInFirstRow.length > 0) {
        cellIndexesInFirstRow.forEach((cellIndex, index) => {
            for (let i = 0; i < 5; i++) {
                if (copiedBoard[i][cellIndex] === player) {
                    amountInRow += 1;
                } else {
                    amountInRow = 0;
                }
                if (amountInRow === 5) {
                    break;
                }
            }
        });
    }

    if (amountInRow === 5) {
        return true;
    }
    return amountInRow;

};

export const isDiagonalWin = (board, player) => {
    const copiedBoard = [...board];
    return true;
};