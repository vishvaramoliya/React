import React from 'react'

export default function Sec() {

  localStorage.setItem("name", "vishwa")

  let data = localStorage.getItem("name")
  console.log(data)

  let obj = { name: "VISHWA", sername: "RAMOLIYA" }
  localStorage.setItem("myObj", JSON.stringify(obj))

  let objdata = JSON.parse(localStorage.getItem("myObj"))
  console.log(objdata);

  return (
    <div>Sec</div>
  )
}
