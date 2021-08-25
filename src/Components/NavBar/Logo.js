import React from 'react'
import styled from 'styled-components'
import logo from "../../Images/Anas_Sam_Black.png";



export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px;
    .logo{
        width   : 50px;
        height   : 50px;
    }

    .logo__name{
        color:#EF476F;
        font-size: 1em;
        font-weight: 700;
    }
`;







function Logo() {
    return (
        <Wrapper>
            <img src={logo} alt="Anas Sam Logo" className="logo" />
            <h3 className="logo__name">Sam Store</h3>
        </Wrapper>
    )
}

export default Logo
