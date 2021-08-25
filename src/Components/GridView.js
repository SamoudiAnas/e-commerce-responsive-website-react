import React from 'react'
import styled from 'styled-components'
import Product from './Product';
export const Wrapper = styled.section`
    img {        
        
        height: 225px;
        object-fit: cover;
    }
    .products__container{
        display: grid;
        gap: 2rem 1.5rem;
    }

    @media (min-width:992px){
        .products__container{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1170px) {
        .products__container {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;
function GridView({products}) {
    return (
        <Wrapper>
            <div className='products__container'>
                {products.map((product) => {
                    return <Product key={product.id} {...product} />
                })}
            </div>
        </Wrapper>
    )
}

export default GridView
