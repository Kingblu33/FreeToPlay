import React from 'react'
import Ichigo from '../assets/ichigo.png'
const Header = () => {
    return (
        <div>
            <div className="container px-8 md:px-12 xl:max-w-5xl mx-auto lg:px-7 xl:px-0">
                <div className="md:flex md:gap-12 pt-40 lg:py-55">
                    <div className="md:w-6/12">
                        <h1 className="text-gray-900 font-bold text-4xl xl:text-5xl">Best Free To Play Games <span className="text-sky-500">Available.</span></h1>
                        <p className="mt-8 text-gray-700">Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                        <div className="md:-mr-32">
                            <form action="" className="w-full mt-12">
                                <div >
                                    <a href='/category'>
                                        <button type="button" title="Start buying" className="invisible lg:visible bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-4 px-6 border border-black500 hover:border-transparent rounded-full ">

                                            See Catalog

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-sky-900 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>
                                    </a>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-12 h-70 mr-0 md:-mr-24 overflow-hidden sm:h-72 md:h-auto md:mt-0 lg:mr-0 lg:-mt-12 md:w-7/12">
                        <img src={Ichigo} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header