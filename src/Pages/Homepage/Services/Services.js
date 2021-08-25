import React from 'react'
import styled from 'styled-components'
import {services} from "../../../Utils/Data";
import Service from './Service';


export const Wrapper =styled.section`
    margin-top: 3rem;
    .section__info{
       text-align: center;
        
    }

    .section__title
    {
        color: #000;
    }

    .section__description
    {
        color: #617d98;
    }

    .section__services
    {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2.5rem;
        margin-top: 3rem;
        padding: 1rem;
    }
        
    @media (min-width:800px){
        .section__container{
            max-width: 1170px;
            margin: 0 auto;
            margin-top: 3rem;
            padding:1rem 3.5rem;
        }
    }

    @media (min-width:768px){
        .services__container{
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }

        .section__info{
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: initial;
        }

    }

`;



function Services() {
    return (
        <Wrapper>
            <div className="section__container">
                <div className="section__info">
                    <h3 className="section__title">Custom Furniture <br /> Built Only For You</h3>
                    <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut.</p>
                </div>
                <div className="section__services">
                    {services.map((service)=>(
                        <Service item={service} />
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default Services
