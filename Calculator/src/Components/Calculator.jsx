import React, { useState } from 'react'

export const Calculator = () => {

    const [input,setInput] = useState("")
    const [result,setResult] = useState("")

    const handleInput = (value)=>{
        setInput((prev)=> prev+value)
    }

    const calculateResult = () =>{
        try{
            setResult(eval(input))
        }catch{
            setResult("Error")
        }
    }

    const clearInput=()=>{
        setInput("")
        setResult("")
    }
    const clearitem = () =>{
        setInput(input.slice(0,-1))
    }

  return (
    <>
        <div className='calculator'>
            <div className="input">
                <h6>INPUT</h6>
                <input type="text" readOnly value={input} placeholder='0' />
                <h6>Result</h6>
                <input type="text" value={result} readOnly placeholder='0' />
            </div>
            <div className="button">
            <button onClick={()=>{clearInput()}}>AC</button>
            <button onClick={()=>{clearitem()}}>DEL</button>
            <button onClick={()=>{handleInput("-")}}>-</button>
            <button onClick={()=>{handleInput("+")}}>+</button>

            <button onClick={()=>{handleInput("7")}}>7</button>
            <button onClick={()=>{handleInput("8")}}>8</button>
            <button onClick={()=>{handleInput("9")}}>9</button>
            <button onClick={()=>{handleInput("/")}}>/</button>

            <button onClick={()=>{handleInput("4")}}>4</button>
            <button onClick={()=>{handleInput("5")}}>5</button>
            <button onClick={()=>{handleInput("6")}}>6</button>
            <button onClick={()=>{handleInput("*")}}>x</button>

            <button onClick={()=>{handleInput("1")}}>1</button>
            <button onClick={()=>{handleInput("2")}}>2</button>
            <button onClick={()=>{handleInput("3")}}>3</button>
            <button onClick={()=>{handleInput(".")}}>.</button>
            <button onClick={()=>{handleInput("0")}}>0</button>

            <button style={{gridColumn: "span 3"}} onClick={()=>{calculateResult()}}>=</button>
            </div>
        </div>
    </>
  )
}
