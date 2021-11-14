import React, {useState} from 'react';
import './App.css';
import {Main} from "./components/Main";

function App() {
    const startCountNumb = ''
    let currentNumb = startCountNumb
    const [countNumb, setCountNumb] = useState(startCountNumb)
    const defineNumber = (n: string) => {
        currentNumb = countNumb + n
        setCountNumb(currentNumb)
    }
    const [firstNumber, setFirstNumber] = useState(0)
    const [commit, setCommit] = useState('')
    const actionNumber = (a: string) => {
        setFirstNumber(Number(countNumb))
        setCountNumb('')
        setCommit(a)
    }

    let result = 0
    const actionEqual = () => {
        if (commit === '+') {
            result = firstNumber + Number(countNumb)
        }
        if (commit === '-') {
            result = firstNumber - Number(countNumb)
        }
        if (commit === '/') {
            result = firstNumber / Number(countNumb)
        }
        if (commit === '*') {
            result = firstNumber * Number(countNumb)
        }
        setCountNumb(result.toString())
        setFirstNumber(0)
    }

    const clearAll = () => {
        setCountNumb('')
        setCommit('')
        setFirstNumber(0)
    }


    return (
        <div className="App">
            <Main countNumb={countNumb}
                  firstNumber={firstNumber}
                  defineNumber={defineNumber}
                  actionNumber={actionNumber}
                  actionEqual={actionEqual}
                  clearAll={clearAll}

            />
        </div>
    );
}

export default App;
