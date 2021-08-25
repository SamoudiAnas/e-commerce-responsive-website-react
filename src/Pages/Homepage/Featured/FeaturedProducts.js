import React from 'react'
import styled from 'styled-components';
import { useProductsContext } from '../../../Contexts/ProductContext';

import Product from '../../../Components/Product';

export const Wrapper = styled.section`
    width: 100%;
    background-color: #F8F8F8;
    padding: 2rem 0;
    margin: 7rem 0 0;
    text-align: center;
    .section__title{
        color: #151515;
        text-align: center;
        position: relative;


    }
    .section__title::after{
        content: "";
        width: 100px;
        height: 4px;
        background-color: #EF476F;
        position: absolute;
        left:50%;
        bottom: -10px;
        transform: translate(-50%,300%);
        
    }

    .products__container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin: 5rem 0;
        gap: 20px;
    }

    .section__btn{
        color: white;
        font-size: 1rem;
        font-weight:700;
        letter-spacing: 1px;
        background-color: #EF476F;
        border: transparent;
        border-radius: 5px;
        padding: 15px 20px;
    }



    @media (min-width:576px){
        .featured__products{
            max-width: 1170px;
            margin: 0 auto;
            margin-top: 3rem;
            padding:1rem 3.5rem;
        }

    }

  
    @media (min-width:768px){
        .products__container{
            padding:1rem 3.5rem;
        }
    }


`;












function FeaturedProducts() {
    const products = useProductsContext();
    const featuredProducts = products.filter((product) =>product.featured === true);
    return (
        <Wrapper>
            <div className="featured__products">
                <h2 className="section__title">Featured Products</h2>
                <div className="products__container">
                    {
                        featuredProducts.map((item)=>(
                            <Product key={item.id} {...item} />
                        ))
                    }
                </div>
                <button className="section__btn">All Products</button>
            </div>
        </Wrapper>
    )
}

export default FeaturedProducts;
