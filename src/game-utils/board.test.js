import { isHorizontalWin } from './board';

test("returns true if it's a win #1", () => {
    const board = [
        ['','x','x','','x','x','x'],
        ['','','','','','',''],
        ['x','x','x','x','x','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
    ];
    expect(isHorizontalWin(board, 'x')).toBe(true);
})

test("returns true if it's a win #2", () => {
    const board = [
        ['','x','x','','x','x','x'],
        ['','','','','','',''],
        ['x','x','x','x','','',''],
        ['','','','','','',''],
        ['','','o','o','o','o','o'],
        ['','','','','','',''],
    ];
    expect(isHorizontalWin(board, 'o')).toBe(true);
})

test("returns true if it's a win #3", () => {
    const board = [
        ['','x','x','','x','x','x'],
        ['','','','','','',''],
        ['x','x','','x','x','x',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','x','x','x','x','x',''],
    ];
    expect(isHorizontalWin(board, 'x')).toBe(true);
})
test("returns true if it's a win #4", () => {
    const board = [
        ['','','x','x','x','x','x'],
        ['','','','','','',''],
        ['x','x','','x','x','x',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','x','x','x','','x',''],
    ];
    expect(isHorizontalWin(board, 'x')).toBe(true);
})

test("returns false if it's not a win #1 - only 4 in a row", () => {
    const board = [
        ['','x','x','','x','x','x'],
        ['','','','','','',''],
        ['x','x','','x','x','x',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','x','x','x','x',''],
    ];
    expect(isHorizontalWin(board, 'x')).toBe(false);
});

test("returns false if it's not a win #2 - not 5 in a row horizontal but vertical", () => {
    const board = [
        ['x','','','','','',''],
        ['x','','','','','',''],
        ['x','','','','','',''],
        ['x','','','','','',''],
        ['x','','','','','',''],
        ['','','','','','',''],
    ];
    expect(isHorizontalWin(board, 'x')).toBe(false);
});

test("returns false if it's not a win #3 - not 5 in row anywhere", () => {
    const board = [
        ['x','x','x','x','o','x','x'],
        ['x','x','o','x','x','x','x'],
        ['x','x','x','o','x','x','x'],
        ['x','o','x','x','x','x','o'],
        ['x','x','x','x','o','x','x'],
        ['o','o','o','o','x','x','x'],
    ];
    expect(isHorizontalWin(board, 'x')).toBe(false);
});