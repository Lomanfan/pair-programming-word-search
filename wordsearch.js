
const wordSearch = (letters, word) => {

    let newArray = transpose(letters);

    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log(letters[1].reverse());
    let reverseArray = [];
    for (letter of letters) {
        reverseArray.push(letter.reverse());
        // console.log(reverseArray);
    } const backwardsArray = reverseArray.map(ls => ls.join(''))
    for (b of backwardsArray) {
        if (b.includes(word)) return true;
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    } const verticalJoin = newArray.map(ls => ls.join(''))
    for (f of verticalJoin) {
        if (f.includes(word)) return true;
    }
    return false;
}

const transpose = matrix => {
    let newMatrix = [];
    for (let row in matrix[0]) {
        let newRow = [];
        for (let col in matrix) {
            newRow.push(matrix[col][row]);
        }
        newMatrix.push(newRow);
    }
    return (newMatrix);
};

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD'));


module.exports = wordSearch;
