import { pigLatin } from './pigLatin';
import { englishToPigLatin } from './PigLatin';
import assert from 'assert';

test('should return string value', () => {
    const result = pigLatin('test');
    expect(typeof result).toEqual('string');
});

test('should return esttay if passed test', () => {
    const result = pigLatin('test');
    expect(result).toEqual('esttay');
});

test('if passed string with consonant first should return with same consonant last followed by ay', () => {
    const result = pigLatin('headphones');
    expect(result).toEqual('eadphoneshay');
});

test('if passed string with vowel first should return same word followed by yay', () => {
    const result = pigLatin('ear');
    expect(result).toEqual('earyay');
});

test('if passed null value should return empty string', () => {
    let result = pigLatin(null);
    expect(result).toEqual('');
    result = pigLatin(undefined);
    expect(result).toEqual('');
});

test('if passed a number should return empty string', () => {
    const result = pigLatin(12345);
    expect(result).toEqual('');
});

test('should behave the same if passed a capital letter', () => {
    let result = pigLatin('HeAdPhOnEs');
    expect(result).toEqual('eadphoneshay');
    result = pigLatin('EaR');
    expect(result).toEqual('earyay');
});

test('should return empty string if given all spaces', () => {
    const result = pigLatin('      ');
    expect(result).toEqual('');
});