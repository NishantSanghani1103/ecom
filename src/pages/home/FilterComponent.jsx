import React, { useEffect, useState } from 'react'
import { FilterMenuList } from '../../data/FilterMenu'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { SortMenuList } from '../../data/SortMenu'
import axios from 'axios'
import { IoMdClose } from "react-icons/io";
export default function FilterComponent({setmobileNav}) {
    return (
        <>
            <div className='shadow-2xl h-fit p-3 border border-gray-200'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl'>Filter</h1>
                    <IoMdClose className='text-2xl font-bold lg:hidden block' onClick={()=>setmobileNav(false)} />
                </div>
                <div className=' my-4' id='filterButton'>
                    <ul>
                        {
                            FilterMenuList.map((value, index) => {
                                return (
                                    <>
                                        <FilterMenu setmobileNav={setmobileNav} key={index} index={index + 1} menuData={value} />
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
function FilterMenu({ menuData, index ,setmobileNav}) {
    const [filterMenu, setfilterMenu] = useState(null)
    const [categoryData, setcategoryData] = useState([])
    const [brandData, setbrandData] = useState([])
    let { title, id } = menuData
    // console.log(index);

    const category = () => {
        axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
            .then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes.data);
                setcategoryData(finalRes.data)
            })
    }

    const brand = () => {
        axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
            .then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes.data);
                setbrandData(finalRes.data)
            })
    }

    useEffect(() => {
        category()
        brand()
    }, [])
    return (
        <>
            <li className='capitalize cursor-pointer text-xl font-semibold flex justify-between items-center border-b my-4 border-gray-200 pb-3' onClick={() => setfilterMenu(filterMenu == index ? null : index)}>
                <span>{title}</span>
                {
                    filterMenu == null ?
                        <FiPlus className='text-gray-400 text-xl' />
                        :
                        <FiMinus className='text-gray-400 text-xl' />
                }
            </li>
            {
                filterMenu == 1 &&
                <form action="">
                    {
                        SortMenuList.map((value, index) => {
                            return (
                                <>
                                    <div key={index} className='flex gap-2 items-center text-gray-600 py-2 capitalize'>
                                        <input type="radio" name='sortBy' onClick={()=>setmobileNav(false)} />
                                        <label htmlFor="">{value.title}</label>
                                    </div>
                                </>
                            )
                        })
                    }
                </form>
            }
            {
                filterMenu == 2
                &&
                <ul className='  items-center text-gray-600 py-2 capitalize' id='categoryList'>
                    {
                        categoryData.map((value, index) => {
                            let { id, name, slug } = value
                            return (
                                <li key={index} className='flex gap-2 py-2'>
                                    <input type="checkbox" />
                                    <label htmlFor="">{name}</label>
                                </li>
                            )
                        })
                    }

                </ul>

            }
            {
                filterMenu == 3
                &&
                <ul className='   text-gray-600 py-2 capitalize' id='brand'>
                    {
                        brandData.map((value, index) => {
                            let { id, name, slug } = value
                            return (
                                <li className='flex gap-2 py-2'>
                                    <input type="checkbox" />
                                    <label htmlFor="">{name}</label>
                                </li>
                            )
                        })
                    }
                </ul>
            }
            {
                filterMenu == 4
                &&
                <form action="" className='  items-center text-gray-600 py-2 capitalize'>
                    <ul>
                        <li className='flex gap-2 py-2'>
                            <input type="checkbox" />
                            <label htmlFor="">4★ & above</label>
                        </li>

                        <li className='flex gap-2 py-2'>
                            <input type="checkbox" />
                            <label htmlFor="">3★ & above</label>
                        </li>

                        <li className='flex gap-2 py-2'>
                            <input type="checkbox" />
                            <label htmlFor="">2★ & above</label>
                        </li>

                        <li className='flex gap-2 py-2'>
                            <input type="checkbox" />
                            <label htmlFor="">1★ & above</label>
                        </li>
                    </ul>
                </form>
            }
        </>
    )
}
