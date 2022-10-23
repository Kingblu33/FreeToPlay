import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

const Home = () => {
    return (
        <div className='relative-w-full'>
            <Navbar />
            <Header />
            <Content />
            {/* <Subscription /> */}
            <Footer />
        </div>
    )
}

export default Home