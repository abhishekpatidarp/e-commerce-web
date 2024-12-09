import { Captions, IndianRupee, Link2 } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/productslice';
import { useNavigate } from 'react-router-dom';

function Productcreate() {
    const [url, setUrl] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();

    const id = title + Math.floor(Math.random() * 1e9);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleaddproduct() {
        if ((url && title && price) !== "") {
            dispatch(add({ id, url, title, price }))
            navigate('/')
        }
    }
    return (
              <div className='flex items-center flex-col items mt-[150px]'>
            <div className='flex mt-[14px] border-2 px-2  rounded-md gap-2 h-11 w-[250px]'>
                <Link2 className='h-10' />
                <input className='border-none outline-none' type="text" placeholder='URL' onChange={(e) => setUrl(e.target.value)} />
            </div>
            <div className='flex mt-[14px] border-2 px-2  rounded-md gap-2 h-11 w-[250px]'>
                <Captions className='h-10' />
                <input className='border-none outline-none' type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='flex mt-[14px] border-2 px-2  rounded-md gap-2 h-11 w-[250px]'>
                <IndianRupee className='h-10' />
                <input className='border-none outline-none' type="text" placeholder='120' onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button onClick={handleaddproduct} className='mt-3 bg-black text-white text-[20px] w-[250px] h-[50px] rounded-md'>Add Product</button>
        </div>
        
    )
}

export default Productcreate