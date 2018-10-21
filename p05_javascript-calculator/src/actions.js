export const OPERATION = 'operation';
export const CLEAR = 'clear';
export const DIGIT = 'digit';

export const addOperation = (op) => ({
    type: OPERATION,
    operation: op
})

export const clear = () => ({
    type: CLEAR
})

export const addDigit = (d) => ({
    type: DIGIT,
    digit: d
})