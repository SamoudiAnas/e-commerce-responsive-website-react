import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Stars({stars}) {

    const tempStars= Array.from({length:5},(_,index)=>{
        const number = index + 0.5;

        return (
            <span key={index} className="star">
                    {stars >= index +1 ? (<FontAwesomeIcon icon={faStar} />) : 
                        stars >=number ? (<FontAwesomeIcon icon={faStarHalfAlt} />):
                            (<FontAwesomeIcon icon={farStar} />)}
            </span>      
        )
    });
    
    return (
        <Wrapper>
            <div className="stars">{tempStars}</div>
            <p className="customer__reviews">(10 customer reviews)</p>
        </Wrapper>
    )
}






export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .customer__reviews{
        margin: 0;
    }
`;


export default Stars
