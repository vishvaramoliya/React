import React, { useEffect, useRef } from 'react'

export default function UseRef() {
  
    const inputRef = useRef();
    const handleclick = ()=>{
      inputRef.current.focus();
        let p = inputRef.current.value ;
        alert(`The value is: ${p}`);
    }





    const inputEff = useRef();

    useEffect(()=>{

      setTimeout(()=>{
        inputEff.current.focus();
      },3000)
    },[])



  return (
    <div>
        <h1>UseRef</h1>
        <input type="text" ref={inputRef}  placeholder='name'/>
        <button onClick={handleclick}>click</button>
    <br /><br />

        <h1>Useeffect</h1>
        <input type="text"  ref={inputEff}  placeholder='Useeffect'/>
    </div>
  )
}