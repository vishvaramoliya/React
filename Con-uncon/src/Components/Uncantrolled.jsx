import React, { useRef } from 'react'

export default function Uncantrolled() {

    const inputRef = useRef();
    const handleclick = () => {
        let value = inputRef.current.value
        alert(`input value is ${value}`)
    }

    return (
        <div>
            <h1>Uncantrolled Component</h1>
            <input type="text" ref={inputRef} placeholder='Enter Value' /><br />
            <button className='btn' onClick={handleclick}> <span>Click</span></button>
        </div>
    )
}