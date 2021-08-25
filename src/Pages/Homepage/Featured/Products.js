import React from 'react'
import styled from 'styled-components';
import { formatPrice } from '../../../Utils/helpers';

export const Wrapper = styled.div`
    margin: 0 auto;
    .product__img{
        height: 225px;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0 0 2px rgba(0,0,0,0.1);
        display: block;
        text-align: center;
    }

    .product__info{
        display: flex;
        justify-content: space-between;
    }
    .product__price{
            color: #EF476F;
    }


    @media (min-width:576px){
 
        
        
    }




    @media (min-width:768px){
       
        
        .product__price{
            color: #EF476F;
        }
    }

    @media (min-width:968px){
       

        
        
        .product__price{
            color: #EF476F;
        }
    }

`;


function Products({item}) {
    return (
        <Wrapper>
            <img src={item.images[0]} alt="" className="product__img" />
            <div className="product__info">
                <p className="product__name">{item.name}</p>
                <p className="product__price">{formatPrice(item.price)}$</p>
            </div>
        </Wrapper>
    )
}

export default Products
