import React,{useState} from 'react';
import './App.css'

// HOOKS in REACTJS
const App = () => {

// hooks should be inside the Component
//    [current, updated]  = useState(initialValue)
const [count, setCount] = useState(0)

    // Functions....
    // to increase count
    const Incum = () => {
        setCount(count + 1) 
    }

    // to decrease count
    const Decnum = () => {
        setCount(count - 1)
    }

    // to reset count
    const Reset = () => {
        setCount(0)
    }

    return(
        <>
        <div className="container">
            <h1 className="title" >Welcome to <span className="heading" >ReactJs Counter</span></h1>
            <div className="box">
                <h1 className="count">{count}</h1>
                <div className="buttons">

                    <button onClick={Incum} className="clickme">Increase</button>

                    <button onClick={Reset} className="clickme">Reset</button>

                    <button onClick={Decnum} className="clickme">Decrease</button>   

                </div>   
            </div>
        </div>
        </>
    )
};

export default App;