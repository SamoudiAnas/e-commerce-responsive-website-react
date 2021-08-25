import React from 'react'
import styled from 'styled-components'

//components
import Filters from '../../Components/Filters';
import Sort from '../../Components/Sort';
import ProductList from '../../Components/ProductList';

export const Wrapper = styled.section`
    padding: 1rem 3.5rem;
    .products {
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
    }
    @media (min-width: 768px) {
        .products {
            grid-template-columns: 200px 1fr;
        }
  }

`;


function Products() {
    return (
        <Wrapper>
            <div className="products">
                <Filters />
                <div>
                    <Sort />
                    <ProductList />
                </div> 
            </div>
        </Wrapper>
    )
}

export default Products
