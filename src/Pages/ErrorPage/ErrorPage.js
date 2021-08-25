import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 30px;
    background-color: #F8F8F8;
    h1{
        color: #EF476F;
        font-size: 4rem;
        margin: 0;
    }

    p{
        margin: 30px 0 50px;
    }
`;


function ErrorPage() {
    return (
        <Wrapper className="page__100">
            <section>
                <h1>404</h1>
                <h3>Something is missing!</h3>
                <p>This page is missing or you assembled the link incorrectly</p>
                <Link to="/" className="hero__btn">
                    Back home
                </Link>
            </section>
        </Wrapper>
    )
}


export default ErrorPage
