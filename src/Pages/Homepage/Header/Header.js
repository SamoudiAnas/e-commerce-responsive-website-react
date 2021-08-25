import React from 'react'
import styled from "styled-components"
import couch from "../../../Images/couch.jpg";

export const Container = styled.section`
    margin-top: 1rem;
    overflow: hidden;
    padding: 2rem;
    @media (min-width:576px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-top: 3rem;
    }
    @media (min-width:800px){
        max-width: 1170px;
        margin: 0 auto;
        margin-top: 3rem;
        padding:1rem 3.5rem;
    }


    .hero__info{
        width: 100%;
        text-align: center;
        @media (min-width:576px){
            text-align: initial;
        }
    }
    .hero__description{
        color: #617d98;
    }





    .hero__images{
        width: 100%;
        display: block;
        position: relative;
        @media (min-width:576px){
             
             order: 1;
        }
    }

    .main__img{
        width: 100%;
        height:250px;
        position: relative;
        display: block;
        margin: 0 auto;
        object-fit: cover;
        border-radius: 5px;

        @media (min-width:800px){
            height:400px;
        }
    }



`;




function Header() {
    return (
        <Container>
            <div className="hero__images">
                <img src={couch} alt="" className="main__img"/>
            </div>
            <div className="hero__info">
                <h2 className="hero__title">Lorem ipsum adipisicing elit.</h2>
                <p className="hero__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur? Libero molestiae, molestias minus perspiciatis voluptates, dolorum, ullam officia dolor natus cumque.</p>
                <button className="hero__btn">Shop Now</button>
            </div>
        </Container>
    )
}

export default Header;
