import React from 'react'
import Cantrolled from './Components/Cantrolled'
import Uncantrolled from './Components/Uncantrolled'

export default function App() {
  return (
    <div className='main'>
      <Cantrolled/>
      <Uncantrolled/>
    </div>
  )
}
