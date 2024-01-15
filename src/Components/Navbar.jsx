import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";

function Navbar() {
    const baseStyles = { height: '90px', position: 'static', backgroundColor: 'white' };
    const focusedStyles = { height: '200px', position: 'fixed', margin: 'auto', };
    const [focused, setFocus] = useState(false);
    const inputRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleFocus = (event) => {
        setSearchQuery(event.target.value);
        setFocus(true);
    }

    useEffect(() => {
        if (focused && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(0, 0);
        }
    }, [focused, inputRef]);
    return (
        <>
            <div className="sticky w-full h-[6em] top-0 z-50 bg-white" style={{}}>
                <div className="flex justify-between m-auto container items-center shadow-xl h-full rounded-t-[15px] rounded-b-[15px]" style={{}}>
                    {
                        focused ? (
                            <div className="flex gap-5 items-center w-full justify-between">
                                <div>
                                    <Link to="/" className='text-orange-300 font-bold text-2xl hover:text-orange-400'>
                                        VogueVibesIndia
                                    </Link>
                                </div>
                                <div className="flex bg-orange-300 rounded-full w-1/2" >
                                    <button title='Search' className='hover:bg-orange-600 py-3 px-3 rounded-full ' >
                                        <FaMagnifyingGlass size={21} />
                                    </button>
                                    <div className="rounded-full transition bg-orange-300 duration-150 flex items-center w-full">
                                        <input type="search" placeholder='Search by Category' className='bg-orange-300 focus:outline-none px-4 py-1.5 block' ref={inputRef} />
                                    </div>
                                </div>
                                <div id="cancel" onClick={() => setFocus(false)}><button>Cancel</button></div>
                            </div>
                        ) :
                            (
                                <>
                                    <div>
                                        <Link to="/" className='text-orange-300 font-bold text-2xl hover:text-orange-400'>
                                            VogueVibesIndia
                                        </Link>
                                    </div>
                                    <div className="hidden lg:flex text-xl items-center gap-10  bg-orange-300 rounded-full px-10 py-3.5">
                                        <Link to="/MenSection" >Men</Link>
                                        <Link to="/WomenSection">Women</Link>
                                        <Link to="/KidSection">Kids</Link>
                                        <Link to="#">Sale</Link>
                                    </div>
                                    <div className="flex bg-orange-300 rounded-full" >
                                        <div className="flex items-center">
                                            <div className="flex rounded-full items-center gap-2 px-0.5 pe-2 transition duration-150 max-w-[300px]">
                                                <button title='Search' className='hover:bg-orange-600 py-3.5 px-3.5 rounded-full ' >
                                                    <FaMagnifyingGlass size={21} />
                                                </button>
                                                <div className="py-2 rounded-full transition bg-orange-300 duration-150 flex items-center ">
                                                    <input
                                                        type="search"
                                                        placeholder="Search"
                                                        className="bg-orange-300 focus:outline-none py-1.5 block md:hidden max-w-[190px]"
                                                        onChange={(e) => handleFocus(e)}
                                                    />
                                                    <input
                                                        type="search"
                                                        placeholder="Search by Category"
                                                        className="bg-orange-300 focus:outline-none py-1.5 hidden md:block"
                                                        onChange={(e) => handleFocus(e)}
                                                    />
                                                </div>
                                                <div className="px-4 py-3.5 rounded-full hover:bg-orange-600 transition duration-150 max-w-[190px]">
                                                    <button title='Favourites'>
                                                        <FaRegHeart size={22} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hover:bg-orange-600 rounded-full pl-2.5 px-2 flex items-center transition duration-150">
                                            <button class="w-[35px]" title='Cart'>
                                                <RiShoppingCart2Fill size={25} />
                                            </button>
                                        </div>

                                    </div>
                                </>
                            )
                    }



                </div >
            </div>
        </>
    );
}

export default Navbar;