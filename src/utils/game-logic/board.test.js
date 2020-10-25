import { isHorizontalWin, isVerticalWin, isDiagonalWin } from './board';

describe("Horizontal", () => {

    describe("Wins", () => {
        test("returns true if it's a win #1", () => {
            const board = [
                [' ', 'x', 'x', ' ', 'x', 'x', 'x'],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', 'x', 'x', 'x', 'x', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isHorizontalWin(board, 'x')).toBe(true);
        })

        test("returns true if it's a win #2", () => {
            const board = [
                [' ', 'x', 'x', ' ', 'x', 'x', 'x'],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', 'x', 'x', 'x', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'o', 'o', 'o', 'o', 'o'],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isHorizontalWin(board, 'o')).toBe(true);
        })

        test("returns true if it's a win #3", () => {
            const board = [
                [' ', 'x', 'x', ' ', 'x', 'x', 'x'],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', 'x', ' ', 'x', 'x', 'x', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', 'x', 'x', 'x', 'x', 'x', ' '],
            ];
            expect(isHorizontalWin(board, 'x')).toBe(true);
        })
        test("returns true if it's a win #4", () => {
            const board = [
                [' ', ' ', 'x', 'x', 'x', 'x', 'x'],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', 'x', ' ', 'x', 'x', 'x', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', 'x', 'x', 'x', ' ', 'x', ' '],
            ];
            expect(isHorizontalWin(board, 'x')).toBe(true);
        })
    })

    describe("Loss", () => {

        test("returns false if it's not a win #1 - only 4 in a row", () => {
            const board = [
                [' ', 'x', 'x', ' ', 'x', 'x', 'x'],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', 'x', ' ', 'x', 'x', 'x', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'x', 'x', 'x', 'x', ' '],
            ];
            expect(isHorizontalWin(board, 'x')).toBe(false);
        });

        test("returns false if it's not a win #2 - not 5 in a row horizontal but vertical", () => {
            const board = [
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isHorizontalWin(board, 'x')).toBe(false);
        });

        test("returns false if it's not a win #3 - not 5 in row anywhere", () => {
            const board = [
                ['x', 'x', 'x', 'x', 'o', 'x', 'x'],
                ['x', 'x', 'o', 'x', 'x', 'x', 'x'],
                ['x', 'x', 'x', 'o', 'x', 'x', 'x'],
                ['x', 'o', 'x', 'x', 'x', 'x', 'o'],
                ['x', 'x', 'x', 'x', 'o', 'x', 'x'],
                ['o', 'o', 'o', 'o', 'x', 'x', 'x'],
            ];
            expect(isHorizontalWin(board, 'x')).toBe(false);
        });
    })
})

describe("Vertical", () => {

    describe("Wins", () => {

        test("Returns true #1", () => {
            const board = [
                ['x', 'x', ' ', ' ', ' ', 'x', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isVerticalWin(board, 'x')).toBe(true)
        })
        test("Returns true #2", () => {
            const board = [
                [' ', 'x', ' ', ' ', ' ', 'x', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isVerticalWin(board, 'x')).toBe(true)
        })
        test("Returns true #3", () => {
            const board = [
                ['x', ' ', 'x', ' ', ' ', 'x', ' '],
                [' ', ' ', 'x', ' ', ' ', ' ', ' '],
                ['x', ' ', 'x', ' ', ' ', ' ', ' '],
                ['x', ' ', 'x', ' ', ' ', ' ', ' '],
                ['x', ' ', 'x', ' ', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isVerticalWin(board, 'x')).toBe(true)
        })
        test("Returns true #4", () => {
            const board = [
                ['x', ' ', ' ', ' ', ' ', 'x', ' '],
                [' ', ' ', 'x', ' ', ' ', ' ', 'x'],
                ['x', ' ', 'x', ' ', ' ', ' ', 'x'],
                ['x', ' ', 'x', ' ', ' ', ' ', 'x'],
                ['x', ' ', 'x', ' ', ' ', ' ', 'x'],
                ['x', ' ', ' ', ' ', ' ', ' ', 'x'],
            ];
            expect(isVerticalWin(board, 'x')).toBe(true)
        })
        test("Returns true #4", () => {
            const board = [
                ['x', ' ', ' ', ' ', ' ', 'x', ' '],
                [' ', ' ', 'x', ' ', 'o', ' ', 'x'],
                ['x', ' ', 'x', ' ', 'o', ' ', ' '],
                ['x', ' ', 'x', ' ', 'o', ' ', 'x'],
                ['x', ' ', 'x', ' ', 'o', ' ', 'x'],
                ['x', ' ', ' ', ' ', 'o', ' ', 'o'],
            ];
            expect(isVerticalWin(board, 'o')).toBe(true)
        })

    })

    describe("Losses", () => {
        test("Returns false #1", () => {
            const board = [
                ['x', ' ', ' ', ' ', ' ', 'x', ' '],
                [' ', ' ', 'x', ' ', ' ', ' ', 'x'],
                ['x', ' ', 'x', ' ', ' ', ' ', 'x'],
                ['x', ' ', 'x', ' ', ' ', ' ', ' '],
                ['x', ' ', 'x', ' ', ' ', ' ', 'x'],
                ['x', ' ', ' ', ' ', ' ', ' ', 'x'],
            ];
            expect(isVerticalWin(board, 'x')).toBe(false);
        })
    })

});

describe("Diagonal", () => {
    describe("Wins", () => {

        test("Returns true #1", () => {
            const board = [
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', 'x', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'x', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', 'x', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', 'x', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isDiagonalWin(board, 'x')).toBe(true);
        })
        test("Returns true #2", () => {
            const board = [
                [' ', 'x', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'x', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', 'x', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', 'x', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', 'x', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isDiagonalWin(board, 'x')).toBe(true);
        })
        test("Returns true #3", () => {
            const board = [
                [' ', ' ', ' ', ' ', ' ', 'x', ' '],
                [' ', ' ', ' ', ' ', 'x', ' ', ' '],
                [' ', ' ', ' ', 'x', ' ', ' ', ' '],
                [' ', ' ', 'x', ' ', ' ', ' ', ' '],
                [' ', 'x', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isDiagonalWin(board, 'x')).toBe(true);
        })
        test("Returns true #4 - from second row", () => {
            const board = [
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', 'x', ' ', ' '],
                [' ', ' ', 'x', 'x', ' ', ' ', ' '],
                [' ', 'x', 'x', ' ', ' ', ' ', ' '],
                ['x', 'x', ' ', 'x', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', ' '],
            ];
            expect(isDiagonalWin(board, 'x')).toBe(true);
        })
        test("Returns true #5 - from second row", () => {
            const board = [
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'x', ' ', ' ', ' ', ' '],
                [' ', ' ', 'x', 'x', ' ', ' ', ' '],
                [' ', 'x', ' ', ' ', 'x', ' ', ' '],
                ['x', ' ', ' ', 'x', ' ', 'x', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', 'x'],
            ];
            expect(isDiagonalWin(board, 'x')).toBe(true);
        })
        test("Returns true #6 - from second row", () => {
            const board = [
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', 'o', ' '],
                [' ', ' ', 'x', ' ', 'o', ' ', ' '],
                [' ', 'x', ' ', 'o', ' ', ' ', ' '],
                ['x', ' ', 'o', 'x', ' ', ' ', ' '],
                ['x', 'o', ' ', ' ', ' ', ' ', 'x'],
            ];
            expect(isDiagonalWin(board, 'o')).toBe(true);
        })

    })

    describe("Losses", () => {
        test("Returns false #1", () => {
            const board = [
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', 'o', ' '],
                [' ', ' ', 'x', ' ', 'o', ' ', ' '],
                [' ', 'x', ' ', 'o', ' ', ' ', ' '],
                ['x', ' ', 'o', 'x', ' ', ' ', ' '],
                ['x', ' ', ' ', ' ', ' ', ' ', 'x'],
            ];
            expect(isDiagonalWin(board, 'o')).toBe(false);
        })
    })
})