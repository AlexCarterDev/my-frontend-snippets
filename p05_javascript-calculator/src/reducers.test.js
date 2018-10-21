import { isNumber, addOperation, addDigit } from './reducers'

describe("isNumber", function() {
    it('', () => {
        expect(isNumber('.123')).toBe(true);
    })
    it('', () => {
        expect(isNumber('123.')).toBe(true);
    })
    it('', () => {
        expect(isNumber('4910')).toBe(true);
    })
    it('', () => {
        expect(isNumber('-231')).toBe(true);
    })
    it('', () => {
        expect(isNumber('-231..23')).toBe(false);
    })
    it('', () => {
        expect(isNumber('text123')).toBe(false);
    })
    it('', () => {
        expect(isNumber('123text')).toBe(false);
    })
    it('', () => {
        expect(isNumber('text')).toBe(false);
    })
});

describe("addOperation", function() {
    var formula; 
    var op; 
    var result;
    it('', () => {
        formula = ['0'];
        op = '+';
        result = '0+';
        expect(addOperation(formula, op).join('')).toEqual(result);
    })
    it('', () => {
        formula = ['10', '=', '10'];
        op = '=';
        result = '10=10';
        expect(addOperation(formula, op).join('')).toEqual(result);
    })
    it('', () => {
        formula = ['10', '=', '10'];
        op = '*';
        result = '10*';
        expect(addOperation(formula, op).join('')).toEqual(result);
    })
    it('', () => {
        formula = ['10', '/', '10'];
        op = '-';
        result = '10/10-';
        expect(addOperation(formula, op).join('')).toEqual(result);
    })
    it('', () => {
        formula = ['10', '*', '10'];
        op = '=';
        result = '10*10=100';
        expect(addOperation(formula, op).join('')).toEqual(result);
    })
});

describe("addDigit", function() {
    var formula; 
    var digit; 
    var result;
    it('', () => {
        formula = ['0'];
        digit = '0';
        result = '0';
        expect(addDigit(formula, digit).join('')).toEqual(result);
    })
    it('', () => {
        formula = ['10', '+', '234'];
        digit = '4';
        result = '10+2344';
        expect(addDigit(formula, digit).join('')).toEqual(result);
    })
    it('', () => {
        formula = ['10', '+'];
        digit = '2';
        result = '10+2';
        expect(addDigit(formula, digit).join('')).toEqual(result);
    })
});