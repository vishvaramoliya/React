import React, { useState } from 'react'

export default function Form() {

    const [name , setName] = useState("");
    const [sub , setSub] = useState("");
    const [mail , setEmail] = useState("");
    const [cat , setCat] = useState("");

    const [nameErr , setNameErr] = useState("");
    const [subErr , setSubErr] = useState("");
    const [mailErr , setEmailErr] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!name){
            setNameErr("Enter name!")
        }
        else{
            setNameErr("")
        }
        if(!sub){
            setSubErr("Enter subject!")
        }
        else{
            setSubErr("")
        }
        if(!mail){
            setEmailErr("Enter email!")
        }
        else if(!mail.includes("@gmail.com")){
            setEmailErr("@gmail.com is missing.....")
        }
        else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(mail)){
            setEmailErr("Somethinges missing")
        }
        else{
            setEmailErr("")
        }

    }
  return (
    <div className='main'>
        <h1>Form Validations</h1>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="">Name</label><br />
            <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/> <br />

            <span>{nameErr}</span><br />
            <label htmlFor="">Subject</label><br />
            <input type="text" placeholder='Enter your subject' onChange={(e)=>setSub(e.target.value)}/><br />
            <span>{subErr}</span><br />
            <label htmlFor="">Email</label><br />
            <input type="text" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/><br />
            <span>{mailErr}</span><br />

            <select name="" id="" onChange={(e)=>setCat(e.target.value)}>
            
                <option value="c">Catagories</option><br />
                <option value="Ele">Electronics</option><br />
                <option value="Clo">Cloths</option><br />
            </select><br />
            {
                cat == "Ele" && <input type="text" placeholder='Enter electronices'/>
            }
            {
                cat == "Clo" && <input type="text" placeholder='Enter clothes'/>
            }
            {
               cat == "c" 
 
            }
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
