import React, { useState } from 'react'
import './navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
    const [slideMenu, setSlideMenu] = useState(false)
    const [dropDown, setDropDown] = useState(false)

    return (
        <nav className='w-full  bg-red-900 grid place-items-center'>
            <div className='w-[90%] md:w-[80%] h-full flex justify-between items-center  py-2'>
                <div style={{ zIndex: 10 }}>
                    <h1 className='text-3xl font-bold' >logo</h1>
                </div>
                <div className='flex gap-9 h-full items-center '>
                    <ul className='gap-9 hidden xl:flex items-center h-full'>
                        <li>Home</li>
                        <li className='nav-item relative'>
                            <a href='#' className='h-full flex items-center'>Service  &nbsp;   <IoIosArrowUp className='nav-icon' /></a>
                            <ul className='submenu absolute w-[20vw] bg-white  transform translate-x-[-20%] flex flex-col gap-3  top-9 shadow-md' style={{ zIndex: 2 }}>
                                <li>enhanced design</li>
                                <li>budjet estimation</li>
                                <li>raw material cost</li>
                                <li>bridge construction</li>
                                <li>electricity pole construction</li>
                                <li>road construction</li>
                            </ul>
                        </li>

                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <button onClick={() => setSlideMenu(!slideMenu)} className='flex xl:hidden' style={{ zIndex: 10 }}>
                        {
                            !slideMenu ? <FaBars size={33} /> : <FaTimes size={33} />
                        }
                    </button>
                </div>
                {slideMenu ? (
                    <div className='slide-menu fixed top-0 right-0 max-w-[500px] w-full h-[100vh] bg-red-900' style={{ zIndex: 9 }}>
                        <div className=' w-full h-full  mt-[50px] p-6'>
                            <div className='w-full h-full '>
                                <ul className=' text-[26px] flex flex-col gap-5'>
                                    <li>Home</li>
                                    <li>
                                        <div className='flex justify-between items-center'>
                                            <p>Service</p>
                                            <IoIosArrowUp onClick={() => setDropDown(!dropDown)} className={`${!dropDown ? 'rotate-180' : 'rotate-0'}`} />
                                        </div>
                                        {dropDown ? (
                                            <div className='absolute w-full h-[20vh] bg-red-900 py-2 px-4 left-0 text-[16px]'>
                                                <ul className='w-full h-full flex flex-col gap-3 font-[600]'>
                                                    <li>The service we provide</li>
                                                    <li>The service we provide</li>
                                                    <li>The service we provide</li>
                                                </ul>
                                            </div>
                                        ) : ('')}
                                    </li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : ''}
            </div>
        </nav>
    )
}

export default Navbar