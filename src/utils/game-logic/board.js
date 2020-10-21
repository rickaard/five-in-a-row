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
    const copiedBoard = [...board];
    let isWin = false;
    
    // convert to horizontal
    copiedBoard.forEach(column => {
        
    })
    
    return true;
};

export const isDiagonalWin = (board, player) => {
    const copiedBoard = [...board];
    return true;
};
