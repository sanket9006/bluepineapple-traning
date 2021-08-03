import React from 'react'
import Footer from '../Comnponents/Footer/Footer'
import Header from '../Comnponents/Header/Header'
import ServicenowFetchAPI from '../Comnponents/ServicenowFetchAPI/ServicenowFetchAPI'

function Home() {
    return (
        <div>
            <Header />
            <ServicenowFetchAPI />
            <Footer />
        </div>
    )
}

export default Home
