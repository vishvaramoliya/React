import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../Feature/Slice';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const Record = useSelector((state) => state.apiKey?.data || []);

  const newRecord1 = Record.filter((el) => el.category === "women's clothing")
  const newRecord2 = Record.filter((el) => el.category === "men's clothing")
  const newRecord3 = Record.filter((el) => el.category === "electronics")
  const newRecord4 = Record.filter((el) => el.category === 'jewelery');

  return (
    <>
      <div className='text-center'>
        <button className='w-[100px] bg-[#04065d] m-5 p-3 rounded-xl text-white'><Link to={"/"}>Home</Link></button>
        <button className='w-[100px] text-[#04065d] m-5 p-3 rounded-xl bg-white'><Link to={"/women"}>Women's</Link></button>
        <button className='w-[100px] text-[#04065d] m-5 p-3 rounded-xl bg-white'><Link to={"/men"}>Men's</Link></button>
        <button className='w-[100px] text-[#04065d] m-5 p-3 rounded-xl bg-white'><Link to={"/electronic"}>Electronic</Link></button>
        <button className='w-[100px] text-[#04065d] m-5 p-3 rounded-xl bg-white'><Link to={"/jewellary"}>Jewellary</Link></button>

      </div>
      <div className='mt-5 text-[50px] pl-10'>
        <h1>Women's clothing</h1>
      </div>
      <div className='flex justify-evenly items-center m-1 text-slate-950 flex-wrap text-center'>
        
        {
          newRecord1 &&
          newRecord1.map((e, i) => {
            return <div className='bg-white shadow-2xl p-10 w-[30%] text-center m-5'>
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
      <div className='mt-5 text-[50px] pl-10'>
        <h1>Men's clothing</h1>
      </div>
      <div className='flex justify-evenly items-center m-1 text-slate-950 flex-wrap text-center'>
      {
          newRecord2 &&
          newRecord2.map((e, i) => {
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

      <div className='mt-5 text-[50px] pl-10'>
        <h1>Electronics</h1>
      </div>
      <div className='flex justify-evenly items-center m-1 text-slate-950 flex-wrap text-center'>
      {
          newRecord3 &&
          newRecord3.map((e, i) => {
            return <div className='bg-white shadow-2xl p-10 w-[30%] text-center m-5'>
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
      <div className='mt-5 text-[50px] pl-10'>
        <h1>Jewelery</h1>
      </div>
      <div className='flex justify-evenly items-center m-1 text-slate-950 flex-wrap text-center'>
      {
          newRecord4 &&
          newRecord4.map((e, i) => {
            return <div className='bg-white shadow-2xl p-10 w-[30%] text-center m-5'>
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
  );
}

