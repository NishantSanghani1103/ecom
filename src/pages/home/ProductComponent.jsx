import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'

export default function ProductComponent({ productData }) {
    // console.log(productData);

    let { id, name, price, discount_percentage, rating, image } = productData
    return (
        <>
            <div className='shadow-lg bg-white border border-gray-200 rounded-lg'>
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div className='p-2 ' id='title'>
                    <h5 className='text-gray-500 font-semibold capitalize text-lg'>{name}</h5>
                    <div className='flex gap-2' id='itemContent'>
                        <div className='flex my-2 items-center' >
                            <FaRupeeSign />
                            <p className='text-xl font-bold'>{price}</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <FaRupeeSign className='text-sm' />
                            <p className=' font-bold line-through'>40</p>
                        </div>
                        <div className='my-2'>
                            <span className='text-green-900 font-bold'>{discount_percentage}% off</span>
                        </div>
                    </div>

                    <div className='bg-green-900 h-[30px] w-[60px] flex justify-center items-center my-2  rounded-xl'>
                        <p className='text-white font-semibold'>{rating}.0 ★ </p>
                    </div>

                    <div className='my-2 bg-gray-100 w-24 rounded-xl flex justify-center items-center p-1 h-[30px]'>
                        <span className='capitalize text-[12px] text-gray-600'>free delivery</span>
                    </div>

                    <div className='bg-blue-700 flex justify-center items-center py-1 mb-5 text-white rounded-xl'>
                        <p className='capitalize '>add to cart</p>
                    </div>
                </div>

            </div>

        </>
    )
}
