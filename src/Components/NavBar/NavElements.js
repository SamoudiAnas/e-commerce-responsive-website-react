import React from 'react'
import styled from "styled-components" 

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    transition: 0.5s all ease;
    overflow: hidden;
    ul{
        margin-bottom: 0;
    }

    @media (min-width:800px){
        height: auto !important;
        margin-right:20px;
        ul{
            display: flex;
            gap: 20px;
        }
        a{
            position: relative;
        }
        a::before{
            content: "";
            position: absolute;
            top: 120%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 0;
            height: 2px;
            background-color: #EF476F;
            transition: width 0.2s ease;
        }   
        li:hover > a::before{
            width: 80%;
        }  
    }
    

`;


function NavElements({ linksRef}) {
    return (
        <Wrapper>
            <ul ref={linksRef}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </Wrapper>
    )
}

export default NavElements
