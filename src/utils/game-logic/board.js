export const initBoard = [
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
            if (amountInRow === 4) {
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

    // check if there are any occurance of player in third row
    // if so push the indexes to new array
    const cellIndexesInThirdRow = [];
    copiedBoard[2].forEach((cell, index) => {
        if (cell === player) cellIndexesInThirdRow.push(index);
    })


    // if no occurance in either upper or second row there can't be 5 in a row vertically, return false
    if (cellIndexesInFirstRow.length === 0 && cellIndexesInSecondRow.length === 0 && cellIndexesInThirdRow.length === 0) {
        return false;
    };

    let amountInRow = 0;
    // start from the upper row and look if there's a vertical win
    if (cellIndexesInFirstRow.length > 0 && !isWin) {
        for (let cellIndex of cellIndexesInFirstRow) {
            if (amountInRow === 4) {
                isWin = true;
                break;
            };
            // start looping from index 0 and go to index 4
            for (let i = 0; i < 4; i++) {
                if (copiedBoard[i][cellIndex] === player) {
                    amountInRow += 1;
                } else {
                    amountInRow = 0;
                }
                if (amountInRow === 4) {
                    isWin = true;
                    break;
                }
            }
        }
    }

    // start from the second row and look if there's a vertical win
    if (cellIndexesInSecondRow.length > 0 && !isWin) {
        for (let cellIndex of cellIndexesInSecondRow) {
            if (amountInRow === 4) {
                isWin = true;
                break;
            };
            // start looping from index 1 and go to index 5
            for (let i = 1; i < 5; i++) {
                if (copiedBoard[i][cellIndex] === player) {
                    amountInRow += 1;
                } else {
                    amountInRow = 0;
                }
                if (amountInRow === 4) {
                    isWin = true;
                    break;
                }
            }
        }
    }

    // start from the third row and look if there's a vertical win
    if (cellIndexesInThirdRow.length > 0 && !isWin) {
        for (let cellIndex of cellIndexesInThirdRow) {
            if (amountInRow === 4) {
                isWin = true;
                break;
            };
            // start looping from index 1 and go to index 5
            for (let i = 2; i < 6; i++) {
                if (copiedBoard[i][cellIndex] === player) {
                    amountInRow += 1;
                } else {
                    amountInRow = 0;
                }
                if (amountInRow === 4) {
                    isWin = true;
                    break;
                }
            }
        }
    }
    return isWin;
};

export const isDiagonalWin = (board, player) => {

    const copiedBoard = [...board];
    let isWin = false;

    // check if there are any occurance of player in upper row
    // if so push the indexes to new array
    const cellIndexesInFirstRow = [];
    copiedBoard[0].forEach((cell, index) => {
        if (cell === player) cellIndexesInFirstRow.push(index);
    })

    const cellIndexesInSecondRow = [];
    copiedBoard[1].forEach((cell, index) => {
        if (cell === player) cellIndexesInSecondRow.push(index);
    })

    const cellIndexesInThirdRow = [];
    copiedBoard[2].forEach((cell, index) => {
        if (cell === player) cellIndexesInThirdRow.push(index);
    })


    // if no occurance in none of the top 3 rows there can't be 5 in a row vertically, return false
    if (cellIndexesInFirstRow.length === 0 && cellIndexesInSecondRow.length === 0 && cellIndexesInThirdRow.length === 0) {
        return false;
    };



    let amountInRow = 0;

    if (cellIndexesInFirstRow.length > 0 && !isWin) {
        for (let cellIndex of cellIndexesInFirstRow) {
            if (amountInRow === 4) {
                isWin = true;
                break;
            };

            if (cellIndex < 4) {
                let currentCellIndex = cellIndex;
                for (let i = 0; i < 4; i++) {
                    if (copiedBoard[i][currentCellIndex] === player) amountInRow += 1;
                    else amountInRow = 0;

                    if (amountInRow === 4) {
                        isWin = true;
                        break;
                    }
                    currentCellIndex++;
                }

            }

            if (cellIndex >= 4) {
                let currentCellIndex = cellIndex;

                for (let i = 0; i < 4; i++) {
                    if (copiedBoard[i][currentCellIndex] === player) amountInRow += 1;
                    else amountInRow = 0;

                    if (amountInRow === 4) {
                        isWin = true;
                        break;
                    }
                    --currentCellIndex;
                }

            }
        }
    }

    if (cellIndexesInSecondRow.length > 0 && !isWin) {
        for (let cellIndex of cellIndexesInSecondRow) {
            if (amountInRow === 4) {
                isWin = true;
                break;
            };

            if (cellIndex < 4) {
                let currentCellIndex = cellIndex;
                for (let i = 1; i < 5; i++) {
                    if (copiedBoard[i][currentCellIndex] === player) amountInRow += 1;
                    else amountInRow = 0;

                    if (amountInRow === 4) {
                        isWin = true;
                        break;
                    }
                    currentCellIndex++;
                }

            }

            if (cellIndex >= 4) {
                let currentCellIndex = cellIndex;

                for (let i = 1; i < 5; i++) {
                    if (copiedBoard[i][currentCellIndex] === player) amountInRow += 1;
                    else amountInRow = 0;

                    if (amountInRow === 4) {
                        isWin = true;
                        break;
                    }
                    --currentCellIndex;
                }

            }
        }
    }

    if (cellIndexesInThirdRow.length > 0 && !isWin) {
        for (let cellIndex of cellIndexesInThirdRow) {
            if (amountInRow === 4) {
                isWin = true;
                break;
            };

            if (cellIndex < 4) {
                let currentCellIndex = cellIndex;
                for (let i = 2; i < 6; i++) {
                    if (copiedBoard[i][currentCellIndex] === player) amountInRow += 1;
                    else amountInRow = 0;

                    if (amountInRow === 4) {
                        isWin = true;
                        break;
                    }
                    currentCellIndex++;
                }

            }

            if (cellIndex >= 4) {
                let currentCellIndex = cellIndex;

                for (let i = 2; i < 6; i++) {
                    if (copiedBoard[i][currentCellIndex] === player) amountInRow += 1;
                    else amountInRow = 0;

                    if (amountInRow === 4) {
                        isWin = true;
                        break;
                    }
                    --currentCellIndex;
                }

            }
        }
    }

    return isWin;
};