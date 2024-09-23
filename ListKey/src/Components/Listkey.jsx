import React from 'react'

export default function Listkey() {

  const arr = ["Apple", "Pineapple", "Banana", "Mango", "Grapes"]

  return (
    <div>

      <h1>Listkey</h1>

      {
        arr.map((e, i) => {
          return <p key={i}>{i + " : " + e}</p>
        })
      }
    </div>
  )
}
