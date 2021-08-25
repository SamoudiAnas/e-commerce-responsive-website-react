import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export const Container = styled.div`
    margin: 20px;
    color: black;

    @media (min-width:800px){
        display: none;
    }
`;


function MenuIcon({showLinks, setShowLinks}) {
    return (
        <Container onClick={()=>{setShowLinks(!showLinks)}}>
            <FontAwesomeIcon icon={faBars} />
        </Container>
    )
}

export default MenuIcon
