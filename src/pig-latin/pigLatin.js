const vowels = ['a', 'e', 'o', 'i', 'u'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialPrefixArr = ['qu', 'ch', 'th', 'sch', 'thr' ]

export function pigLatin(input) {
    if (input && typeof input === 'string' && input.trim()) {
        input = input.trim();
        let pigLatinString = '';
        const indexOfFirstVowel = getIndexOfFirstVowel(input.toLowerCase());
        const stringUpToFirstVowel = getStringUpToFirstVowel(input.toLowerCase(), indexOfFirstVowel);
        const isFirstCharUppercase = input[0].toUpperCase() === input[0];
        const inputAfterFirstChar = input.substring(stringUpToFirstVowel.length);
        pigLatinString += checkIfNumber(stringUpToFirstVowel, input.toLowerCase());
        pigLatinString += checkIfVowel(stringUpToFirstVowel, input.toLowerCase());
        pigLatinString += checkIfConsonant(stringUpToFirstVowel, inputAfterFirstChar.toLowerCase());
        return isFirstCharUppercase ? pigLatinString[0].toUpperCase() + pigLatinString.substring(1): pigLatinString;
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

export function getStringUpToFirstVowel(input, indexOfFirstVowel) {
    if (specialPrefixArr.includes(input.substring(0, indexOfFirstVowel))) {
        return input.substring(0, indexOfFirstVowel);
    } 
    return input[0]
}

export function getIndexOfFirstVowel(input) {
    const inputArr = input.split('');
    if (inputArr[0] == 'q') {
        return 2;
    }
    return inputArr.findIndex(char => vowels.includes(char));
}