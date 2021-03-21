const vowels = ['a', 'e', 'o', 'u'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function pigLatin(input) {
    if (input && typeof input === 'string' && input.trim()) {
        input = input.toLowerCase();
        input = input.trim();
        let pigLatinString = '';
        const firstChar = getFirstChar(input);
        const inputAfterFirstChar = input.substring(firstChar.length);
        pigLatinString += checkIfNumber(firstChar, input);
        pigLatinString += checkIfVowel(firstChar, input);
        pigLatinString += checkIfConsonant(firstChar, inputAfterFirstChar);
        return pigLatinString;
    }
    return '';
}

export function checkIfVowel(firstChar, wholeString) {
    return vowels.includes(firstChar) ? wholeString + 'yay' : '';
}

export function checkIfConsonant(firstChar, stringAfterFirstChar) {
    if (!vowels.includes(firstChar) && !numbers.includes(firstChar)) {
        return stringAfterFirstChar + firstChar + 'ay'
    }
    return '';
}

export function checkIfNumber(firstChar, input) {
    return numbers.includes(firstChar) ? input : '';
}

export function getFirstChar(input) {
    const strAsArray = input.split('');
    let firstChar = strAsArray[0]
    return firstChar === 'q' ? firstChar += strAsArray[1] : firstChar;
}