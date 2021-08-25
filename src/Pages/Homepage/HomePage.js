import React from 'react'
import Header from './Header/Header'
import FeaturedProducts from './Featured/FeaturedProducts'
import Services from './Services/Services'
import Newsletter from './Newsletter/Newsletter'



function HomePage() {
    return (
        <>
           <Header />
           <FeaturedProducts />
           <Services /> 
           <Newsletter />
        </>
    )
}

export default HomePage

