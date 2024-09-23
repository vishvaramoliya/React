import React, { useState } from 'react'

export default function Addform() {

    const [category, setCategory] = useState('');

    const [color, setColor] = useState('');
    const [storage, setStorage] = useState('');
    const [ram, setRam] = useState('');

    const [colorerr, setColorerr] = useState('');
    const [stoerr, setStoerr] = useState('');
    const [ramerr, setRamerr] = useState('');


    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [no, setNo] = useState('');

    const [nameerr, setNameerr] = useState('');
    const [numerr, setNumerr] = useState('');
    const [noerr, setNoerr] = useState('');



    const [showInputs, setShowInputs] = useState(false);

    const handleClick = (e) => {

        e.preventDefault();
        

        if (!name) {
            setNameerr("Please Fill This Fild");
        }
        else {
            setNameerr("");
        }
        if (!number) {
            setNumerr("Please Fill This Fild");
        }
        else {
            setNumerr("");
        }
        if (!no) {
            setNoerr("Please Fill This Fild");
        }
        else {
            setNoerr("");
        }
        if(name && number && no){
            alert("Add to cart done!")
            setShowInputs(true);

        }
    };

    const submit = (e) => {
        e.preventDefault();
        if(color && storage && ram){
            alert("Submit done!")
        }

        if (!color) {
            setColorerr("Please Fill This Fild");
        }
        else {
            setColorerr("");
        }
        if (!storage) {
            setStoerr("Please Fill This Fild");
        }
        else {
            setStoerr("");
        }
        if (!ram) {
            setRamerr("Please Fill This Fild");
        }
        else {
            setRamerr("");
        }
    }
    return (
        <>


            <div className='main1'>
                <div className="main">
                    <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" className='logo' alt="" />

                    <form action="">
                        <br />
                        <label className='lb' htmlFor="" >Name:</label><br />
                        <input type="text" className='in1' placeholder='Enter name' onChange={(e) => setName(e.target.value)} /><br />
                        <span>{nameerr}</span><br />

                        <br />
                        <label className='lb' htmlFor="">Mobail no:</label><br />
                        <input type="text" className='in1' placeholder='Enter mobail no' onChange={(e) => setNumber(e.target.value)} /><br />
                        <span>{numerr}</span><br />

                        <br />
                        <label className='lb' htmlFor="">GST no:</label><br />
                        <input type="text" className='in1' placeholder='Enter GST No' onChange={(e) => setNo(e.target.value)} /><br /><br />
                        <span>{noerr}</span><br />

                        <br />



                        <select name="" id="" onChange={(e) => setCategory(e.target.value)} >
                            <option value="">Category</option>
                            <option value="el">Electronics</option>
                            <option value="cl">Fashion</option>
                            <option value="be">Beauty</option>
                            <option value="jw">Jwellery</option>
                            <option value="wa">Watch</option>
                        </select>

                        <a href="#slide">
                            <button onClick={(e) => handleClick(e)}>ADD TO CART</button>
                        </a>

                    </form>
                </div>
            </div>


            <div id="slide">
                {
                    category == "el" &&
                    <div className="box1">
                        <div className='container'>
                            <div className="row">
                                <div className="col col-12">

                                    <div className="text">

                                        {showInputs && (
                                            <div className="input-container">

                                                <h1>Fill Your Electronic Item Details</h1>
                                                <br />
                                                <input type="text" placeholder="Enter your product name" onChange={(e) => setColor(e.target.value)} /> <br />
                                                <span>{colorerr}</span><br />
                                                <input type="text" placeholder="Brand Name" onChange={(e) => setStorage(e.target.value)} /> <br />
                                                <span>{stoerr}</span><br />
                                                <input type="text" placeholder="Color" onChange={(e) => setRam(e.target.value)} /> <br />
                                                <span>{ramerr}</span><br />

                                                <button onClick={submit}>SUBMIT</button>
                                            </div>
                                        )}
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                }



                {
                    category == "cl" &&

                    <div className="box1">
                        <div className='container'>
                            <div className="row">
                                <div className="col col-12">

                                    <div className="text">

                                        {showInputs && (
                                            <div className="input-container">
                                                <h1>Fill Your Cloths Item Details</h1>
                                                <br />
                                                <input type="text" placeholder="Type of Cloths" onChange={(e) => setColor(e.target.value)} /> <br />
                                                <span>{colorerr}</span><br />
                                                <input type="text" placeholder="Color :" onChange={(e) => setStorage(e.target.value)} /> <br />
                                                <span>{stoerr}</span><br />
                                                <input type="text" placeholder="Price : $/₹" onChange={(e) => setRam(e.target.value)} /> <br />
                                                <span>{ramerr}</span><br />

                                                <button onClick={submit}>SUBMIT</button>
                                            </div>
                                        )}
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                }


                {
                    category == "be" &&
                    <div className="box1">
                        <div className='container'>
                            <div className="row">
                                <div className="col col-12">

                                    <div className="text">

                                        {showInputs && (
                                            <div className="input-container">
                                                <h1>Fill Your Beauty Item Details</h1>
                                                <br />
                                                <input type="text" placeholder="Product Name" onChange={(e) => setColor(e.target.value)} /> <br />
                                                <span>{colorerr}</span><br />
                                                <input type="text" placeholder="Brand Nam" onChange={(e) => setStorage(e.target.value)} /> <br />
                                                <span>{stoerr}</span><br />
                                                <input type="text" placeholder="Price : $/₹" onChange={(e) => setRam(e.target.value)} /> <br />
                                                <span>{ramerr}</span><br />

                                                <button onClick={submit}>SUBMIT</button>
                                            </div>
                                        )}
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                }



                {
                    category == "jw" &&
                    <div className="box1">
                        <div className='container'>
                            <div className="row">
                                <div className="col col-12">

                                    <div className="text">

                                        {showInputs && (
                                            <div className="input-container">
                                                <h1>Fill Your Jewellary Item Details</h1>
                                                <br />
                                                <input type="text" placeholder="Material : Gold/Silver" onChange={(e) => setColor(e.target.value)} /> <br />
                                                <span>{colorerr}</span><br />
                                                <input type="text" placeholder="Weight : 10g/5g" onChange={(e) => setStorage(e.target.value)} /> <br />
                                                <span>{stoerr}</span><br />
                                                <input type="text" placeholder="Price : $/₹" onChange={(e) => setRam(e.target.value)} /> <br />
                                                <span>{ramerr}</span><br />

                                                <button onClick={submit}>SUBMIT</button>
                                            </div>
                                        )}
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                }



                {
                    category == "wa" &&
                    <div className="box1">
                        <div className='container'>
                            <div className="row">
                                <div className="col col-12">

                                    <div className="text">

                                        {showInputs && (
                                            <div className="input-container">
                                                <h1>Fill Your Watch Item Details</h1>
                                                <br />
                                                <input type="text" placeholder="Color : Crystal clear" onChange={(e) => setColor(e.target.value)} /> <br />
                                                <span>{colorerr}</span><br />
                                                <input type="text" placeholder="Model Name : Breitling Chronomat" onChange={(e) => setStorage(e.target.value)} /> <br />
                                                <span>{stoerr}</span><br />
                                                <input type="text" placeholder="Features : Calling/Simple" onChange={(e) => setRam(e.target.value)} /> <br />
                                                <span>{ramerr}</span><br />
                                                <input type="text" placeholder="Brand Name : boat/Noice" onChange={(e) => setRam(e.target.value)} /> <br />

                                                <span>{ramerr}</span><br />
                                                <input type="text" placeholder="Price : $/₹" onChange={(e) => setRam(e.target.value)} /> <br />
                                                <span>{ramerr}</span><br />


                                                <button onClick={submit}>SUBMIT</button>
                                            </div>
                                        )}
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}
