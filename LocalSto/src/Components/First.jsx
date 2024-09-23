import React from 'react'

export default function First() {
    
    localStorage.setItem("name" , "Vishwa");
    localStorage.setItem("name1" , "Priya");

    let data = localStorage.getItem("name")
    console.log(data);

    let obj = {name : "Vishwa" , subject : "React"}
    localStorage.setItem("myOBJ" , JSON.stringify(obj));

    let OBJData =  JSON.parse(localStorage.getItem("myOBJ"))
    
    console.log(OBJData);
    

  return (
    <div>first</div>
  )
}
