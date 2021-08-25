import React from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components'
import AddToCart from '../../Components/AddToCart';
import PageHero from "../../Components/PageHero"
import ProductImages from '../../Components/ProductImages';
import Stars from '../../Components/Stars';
import {formatPrice} from "../../Utils/helpers"
import { products } from '../../Utils/Data';


export const Wrapper = styled.section`
    padding: 2rem 3.5rem 0;

    .product__price{
        color: #EF476F;
    }

    .product__description{
        color: #617d98;
        font-size: .9em;
    }

    .info {
        text-transform: capitalize;
        width: 300px;
        display: grid;
        grid-template-columns: 125px 1fr;
        span {
        font-weight: 500;
        }
    }
    
    hr{
        color: #efefef;
    }

    .infos{
        margin-top: 30px;
    }

    @media (min-width:800px){
       .product{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
       }

       .product__info{
           margin: auto 0;
       }
       .product__name{
           font-size: 1.5rem;
       }
    }


`;


function SingleProduct() {
    //  1
    //get the id of the product to fetch
    const {id} = useParams();
    const index = products.find(product => product.id === id);
    console.log(id);
    //  2
    //get the product
    var product = index;





    return (
        <Wrapper>
            <PageHero />
            <div className="product">
                <ProductImages images={product.images}/>
                <div className="product__info">
                    <h3 className="product__name">{product.name}</h3>
                    <Stars stars={product.stars}/>
                    <p className="product__price">{formatPrice(product.price)}</p>
                    <p className="product__description">{product.description}</p>
                    <AddToCart />
                    <hr className="line" />
                    <div className="infos">
                                            <p className="info">
                        <span>Availability:</span>{product.stock > 0 ? "In stock":"Out of stock"}
                    </p>
                    <p className="info">
                        <span>SKU:</span> {id}
                    </p>
                    <p className="info">
                       <span> Brand:</span> {product.company}
                    </p>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default SingleProduct
