import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'

export const Wrapper =styled.section`
    text-align: center;
    background-color: #EEF0F2;
    border-radius: 5px;
    padding: 2rem 1rem 1rem;
    
       
    .service__icon{
        width: 40px;
        height: 40px;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .service__icon__container{
        margin: 0 auto;
        border-radius: 50%;
        width: 90px;
        height: 90px;
        background-color: #EF476F;
        position: relative;
    }
    .service__description{
        font-size: .9em;
    }
`;
function Service({item}) {
    return (
        <Wrapper>
            <div className="service__icon__container">
                <FontAwesomeIcon className="service__icon" icon={item.image} />
            </div>
            <h4 className="service__title">{item.name}</h4>
            <p className="service__description">{item.description}</p>
        </Wrapper>
    )
}

export default Service
