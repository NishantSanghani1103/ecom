import React, { useEffect, useState } from 'react'
import { AiFillAlert } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FilterMenuList } from '../data/FilterMenu';
import { SortMenuList } from '../data/SortMenu';
import { FaRupeeSign } from "react-icons/fa";
import axios from 'axios';
import FilterComponent from './home/FilterComponent';
import ProductComponent from './home/ProductComponent';
import { useOutletContext } from 'react-router-dom';
export default function Home() {

    const [productItems, setproductItems] = useState([])

    const { mobileNav, setmobileNav } = useOutletContext();
    console.log(mobileNav);

    const productData = () => {
        axios.get(`https://wscubetech.co/ecommerce-api/products.php`, {
            params: {
                limit: 15
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes.data);
                setproductItems(finalRes.data)
            })
    }

    useEffect(() => {
        productData()
    }, [])

    return (
        <>
            <section className='max-w-full ' id='homeContent'>
                <div className='max-w-[1320px]  mx-auto'>
                    <div className='w-full grid lg:grid-cols-[25%_auto]'>
                        <div className={`lg:static fixed top-0 lg:z-0  w-full z-99 lg:h-auto duration-300 h-screen overflow-y-auto
                            
                            ${mobileNav ? ` left-0` : `-left-full `}
                            bg-white`}>
                            <FilterComponent setmobileNav={setmobileNav} />
                        </div>
                        <div className=' p-10' id='products'>


                            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4'>
                                {
                                    productItems.map((value, index) => <ProductComponent productData={value} key={index} />)
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}


