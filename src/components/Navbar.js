import React from 'react'
import logo from '../assets/logo.svg'
const Navbar = () => {
    return (
        <header>
            <input type="checkbox" name="hbr" id="hbr" className="hbr peer" hidden aria-hidden="true" />
            <nav className="fixed z-10 w-full border-b bg-white bg-opacity-70 backdrop-blur navbar peer-checked:navbar-active md:absolute md:bg-transparent">
                <div className="container m-auto px-2 md:px-12 lg:px-7">
                    <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                        <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                            <a href="/" aria-label="logo" className="flex space-x-2 items-center">
                                <div aria-hidden="true" className="flex space-x-1">
                                    {/* <div className="h-4 w-4 rounded-full bg-gray-900"></div> */}
                                    <div >
                                        <img src={logo} className="w-20 h-20" />
                                    </div>
                                </div>
                                <span className="text-base font-bold text-gray-400">GameKnock</span>
                            </a>
                            <label htmlFor="hbr" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                            </label>
                        </div>
                        <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 mx-6 space-y-20 p-6 rounded-xl shadow-lg bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none">
                            <div className="text-gray-600 lg:pr-4">
                                <ul className="space-y-6 tracking-wide font-medium text-lg lg:text-sm lg:flex lg:space-y-0">
                                    <li>
                                        <a href="/" className="block md:px-4 transition hover:text-sky-700">
                                            <span>Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/category/" className="block md:px-4 transition hover:text-sky-700">
                                            <span>Categories</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/demmar-allen-94179b194/" target='_blank' className="block md:px-4 transition hover:text-sky-700">
                                            <span>About</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar