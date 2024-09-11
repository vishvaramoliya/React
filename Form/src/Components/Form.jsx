import React, { useEffect, useRef, useState } from 'react';

export default function Form() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const nameInputRef1 = useRef(null);
  const nameInputRef2 = useRef(null);

  useEffect(() => {
    if (nameInputRef1.current) {
      nameInputRef1.current.focus();
    }
    console.log('Mail:');
  }, [mail]);

  useEffect(() => {
    if (nameInputRef2.current) {
      nameInputRef2.current.focus();
    }
    console.log('Password:');
  }, [pass]);


 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with Name: ${mail}, Password: ${pass}`);
    console.log( 'Email : ' , mail , 'Password : ' , pass)
  };

  return (
    <>
      
      <div className="form">

      <form onSubmit={handleSubmit}>

      <div className="t">
      <h1 className='title'>Form</h1>

      </div>

        <div className='input-container ic1'>
          <input className='input'
            id="nameInput"
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            ref={nameInputRef1}
            placeholder=''
            required
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">Email</label>

        </div>
       


        <div className='input-container ic2'>
          <input
          className='input'
          placeholder=''
            id="mailInput"
            type="password"
            value={pass}                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            onChange={(e) => setPass(e.target.value)}
            ref={nameInputRef2}
            required
          />
          <div class="cut"></div>
          <label for="password" class="placeholder">Password</label>
        </div>

       
        <br />
        <button type="submit" className='btn'>Submit</button>
      </form>
      </div>
    </>
  );
}
