import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../Feature/Slice';
import { Link } from 'react-router-dom';

export default function Mens() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchApi());
  },[])

  const Record = useSelector((state)=>state.apiKey?.data || []);

  const newRecord = Record.filter((el)=> el.category === "men's clothing")
  return (
    <>
    
    <div className='text-center'>
      <button className='w-[100px] text-[#04065d] m-5 p-3 rounded-xl bg-white'><Link to={"/"}>Home</Link></button>
        <button className='w-[100px] text-[#04065d] m-5 p-3 rounded-xl bg-white'><Link to={"/women"}>Women's</Link></button>
        <button className='w-[100px] bg-[#04065d] m-5 p-3 rounded-xl text-white'><Link to={"/men"}>Men's</Link></button>
        <button className='w-[100px] text-[#04065d] m-5 p-3 rounded-xl bg-white'><Link to={"/electronic"}>Electronic</Link></button>
        <button className='w-[100px] text-[#04065d] m-5 p-3 rounded-xl bg-white'><Link to={"/jewellary"}>jewellary</Link></button>
       
      </div>

      <div className='mt-5 text-[50px] pl-10'>
        <h1>Men's clothing</h1>
      </div>
      <div className='flex justify-evenly items-center m-1 text-slate-950 flex-wrap text-center'>
        
        {
          newRecord &&
          newRecord.map((e, i) => {
            return <div className='bg-white rounded-xl shadow-2xl p-10 w-[30%] text-center m-5'>
              <div className='text-center flex justify-center'>
              <img className='h-[200px] hover:scale-110 mb-3 duration-1000' src={e.image} alt="" />
              </div>
              <ul key={i}>
                <li>{e.title}</li>
                <li className='text-red-600'>${e.price}</li>
              </ul>
            </div>
          })
        }
      </div>
  </>
  )
}
