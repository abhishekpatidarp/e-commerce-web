import { Delete } from 'lucide-react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { productdelete } from '../store/productslice';

function ProductCard({id, img,title,price}) {
  console.log(img);
  
  const dispatch =useDispatch();
  function handledelete(){
      dispatch(productdelete(id))
  }
  return (
    <div className='  w-[250px] flex-col items border-[2px] p-2 mb-4 rounded-md'> 
         <div >
        <img className='h-[250px] w-[250px] object-cover rounded-md' src={img} alt="" />
        <h2>{title}</h2>
        <p>{price}</p>
        <button className=' mt-2 bg-black text-white text-[20px] w-full h-[35px] rounded-md'>Buy Now</button>
         <button onClick={handledelete}><Delete/></button>
    </div>
    </div>

  )
}

export default ProductCard