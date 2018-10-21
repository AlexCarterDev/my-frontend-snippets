/* eslint no-eval: 0 */

import { combineReducers } from "redux";
import { OPERATION, CLEAR, DIGIT } from './actions'

const initialState = ['0'];

export function isNumber(n) {
    if (n === '-') {
        return false;
    }
    return /^-?\d*\.?\d*$/.test(n);
}

function isContainEqulasSign(f) {
    if (f.length >= 2) {
        return f[f.length-2] === '=';
    }
    return false;
}

function getLast(f) {
    return f[f.length - 1];
}

export function addOperation(formula, op) {
    console.log('operation: ');
    console.log('  formula: ' + formula);
    console.log('  operation: ' + op);
    if (isContainEqulasSign(formula)) {
        if (op !== '=') {
            var n = parseFloat(getLast(formula));
            formula = [];
            formula.push(n);
            formula.push(op);
        }
    } else {
        if (isNumber(getLast(formula))) {
            let result;
            if (op === '=') {
                let str = formula.join('');
                result = eval(str).toString();
                formula.push(result);
            } else {
                formula.push(op);
            }
        } else {
            formula.pop();
            formula.push(op);
        }
    }

    console.log('  result: ' + formula);
    return formula;
}

export function addDigit(formula, digit) {
    if (isContainEqulasSign(formula)) {
        formula = [];
        formula.push(digit);
    } else {
        var last = getLast(formula);
        if (isNumber(last)) {
            var n = last + digit;

            // remove zeros at the beginning
            if ('0' === last & (digit !== '.')) {
                n = digit;
            }
            if (isNumber(n)) {
                formula[formula.length-1] = n;
            }
        } else {
            formula.push(digit);
        }
    }

    return formula;
}

const main = (state = initialState, action) => {
    var formula = [];
    switch(action.type) {
        case OPERATION: {
            formula = state.slice();
            formula = addOperation(formula, action.operation);
            return formula;
        }
        case DIGIT: {
            formula = state.slice();
            formula = addDigit(formula, action.digit);
            return formula;
        }
        case CLEAR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    main
})