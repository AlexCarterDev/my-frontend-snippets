const { combineReducers, createStore } = Redux;
const { Provider, connect } = ReactRedux;


// --- Components
class Buttons extends React.Component {
    render() {
        return (
            <div id='buttons'>
            <button id='clear' onClick={this.props.clear}>AC</button>
            <button id='divide' onClick={() => this.props.addOperation('/')}>/</button>
            <button id='multiply' onClick={() => this.props.addOperation('*')}>x</button>
            <button id='seven' onClick={() => this.props.addDigit('7')}>7</button>
            <button id='eight' onClick={() => this.props.addDigit('8')}>8</button>
            <button id='nine' onClick={() => this.props.addDigit('9')}>9</button>
            <button id='subtract' onClick={() => this.props.addOperation('-')}>-</button>
            <button id='four' onClick={() => this.props.addDigit('4')}>4</button>
            <button id='five' onClick={() => this.props.addDigit('5')}>5</button>
            <button id='six' onClick={() => this.props.addDigit('6')}>6</button>
            <button id='add' onClick={() => this.props.addOperation('+')}>+</button>
            <button id='one' onClick={() => this.props.addDigit('1')}>1</button>
            <button id='two' onClick={() => this.props.addDigit('2')}>2</button>
            <button id='three' onClick={() => this.props.addDigit('3')}>3</button>
            <button id='equals' onClick={() => this.props.addOperation('=')}>=</button>
            <button id='zero' onClick={() => this.props.addDigit('0')}>0</button>
            <button id='decimal' onClick={() => this.props.addDigit('.')}>.</button>
            </div>
        )
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div id='calc'>
            <FormulaContainer />
            <DisplayContainer />
            <ButtonsContainer />
            </div>
        )
    }
}

class Display extends React.Component {
render() {
        return (
            <div id='display'>
                {this.props.str}
            </div>
        )
    }
}

class Formula extends React.Component {
    render() {
        return (
            <div id='formula'>
                {this.props.str}
            </div>
        )
    }
}
  

// --- Containers
const ButtonsContainer = connect((state) => ({
}), (dispatch) => ({
    clear: () => dispatch(clear()),
    addDigit: (d) => dispatch(addDigit(d)),
    addOperation: (o) => dispatch(addOperation(o))
}))(Buttons)

const DisplayContainer = connect((state) => ({
    str: state.main[state.main.length - 1]
}), (dispatch) => {
})(Display)

const FormulaContainer = connect((state) => ({
    str: state.main.join('')
}), (dispatch) => {
})(Formula)

// --- Actions ---
const OPERATION = 'operation';
const CLEAR = 'clear';
const DIGIT = 'digit';

const addOperation = (op) => ({
    type: OPERATION,
    operation: op
})

const clear = () => ({
    type: CLEAR
})

const addDigit = (d) => ({
    type: DIGIT,
    digit: d
})




// --- Reducers --- 
const initialState = ['0'];

function isNumber(n) {
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

function addOperationToArray(formula, op) {
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
                formula.push(op);
                formula.push(result);
            } else {
                formula.push(op);
            }
        } else {
            formula.pop();
            if (op === '=') {
                let str = formula.join('');
                let result = eval(str).toString();
                formula.push(op);
                formula.push(result);
            } else {
                formula.push(op);
            }
        }
    }

    return formula;
}

function addDigitToArray(formula, digit) {
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
                if (last.length <= 32) {
                    formula[formula.length-1] = n;
                }
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
            formula = addOperationToArray(formula, action.operation);
            return formula;
        }
        case DIGIT: {
            formula = state.slice();
            formula = addDigitToArray(formula, action.digit);
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

const rootReducer = combineReducers({
    main
})


// --- Index ---
var store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.getElementById('root')
);
