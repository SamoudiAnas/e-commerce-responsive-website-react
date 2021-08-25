import React from 'react'
import styled from 'styled-components'
import image from '../../Images/lady and plants.jpg';

export  const Wrapper = styled.section`

    padding:1rem 3.5rem;


    .section__title{
        color: #000;
        margin-bottom: 6rem;
        text-align: center;
        position: relative;
    }
    .section__title::after{
        content: "";
        width: 50px;
        height: 4px;
        background-color: #EF476F;
        position: absolute;
        left:50%;
        bottom: -10px;
        transform: translate(-50%,300%);
        
    }
    .about__container{
        margin-bottom: 3.5rem;
    }
    .about__img{
        width: 100%;
        border-radius: 5px;
        max-height: 550px;
        object-fit: cover;
        margin-bottom:1rem;
    }
    .about__description{
        color: #617d98;
        margin: auto;
    }



    @media (min-width:800px){
        max-width: 1170px;
        margin: 0 auto;
        margin-top: 3rem;
    }
    @media (min-width:768px){
        .about__container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }

        
    }
`;


function Aboutpage() {
    return (
        <Wrapper>
            <h2 className="section__title">About Us</h2>
            <div className="about__container">
                <img className="about__img" src={image} alt="" />
                <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ex distinctio perspiciatis odio maxime excepturi debitis officia nihil alias dolor accusantium, adipisci nemo, doloribus dolores obcaecati? Repellat, enim inventore. Rem. <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ex distinctio perspiciatis odio maxime excepturi debitis officia nihil alias dolor accusantium, adipisci nemo, doloribus dolores obcaecati? Repellat, enim inventore. Rem.</p>
            </div>
        </Wrapper>
    )
}

export default Aboutpage
