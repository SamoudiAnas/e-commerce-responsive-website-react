import React from 'react'
import styled from "styled-components"

export const Wrapper = styled.footer`
    background-color: #151515;
    padding: .5rem;
    margin: 0;
    text-align: center;
    color: white;
    .footer{
        font-weight: 500;
        letter-spacing: 1px;
    }
    .colored{
        color: #EF476F;
    }
`;


function Footer() {
    return (
        <Wrapper>
            <h5 className="footer">&copy; {new Date().getFullYear()}<span className="colored"> Sam Store</span> All rights reserved.</h5>
        </Wrapper>
    )
}

export default Footer
