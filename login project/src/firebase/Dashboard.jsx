import React, { useState } from 'react'

export default function Dashboard() {
  const [userName, setUserName] = useState([])

  return (
    <div>
      <p className='p1'>
                WELCOME,&nbsp;
                {
                    userName && <span>{userName.name}</span>
                }
            </p>
    </div>
  )
}
