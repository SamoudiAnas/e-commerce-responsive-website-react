import React from 'react'
import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #EF476F; 
    padding:.5rem 3.5rem;  
    padding-bottom: 3rem;
    margin-top: 2rem;

    .section__title{
        color: #fff;
        font-size: 1.5rem;
    }

    .newsletter__description{
        color: #efefef;
        font-size: .8em;
    }

    .newsletter__form{
        display: grid;
        grid-template-columns: 1fr auto;
        height: 3rem;
    }

    .newsletter__input{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border: 1px solid #151515;
        padding-left: 1rem;
    }

    .newsletter__btn{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border: 1px solid #151515;
        background-color: #151515;
        padding: 0 1rem;
        color: white;
        letter-spacing: 2px;
        font-family: 700;
    }


    @media (min-width:800px){
        .section__container{
            max-width: 1170px;
            margin: 0 auto;
            margin-top: 3rem;
        }
    }

    @media (min-width:768px){
        .newsletter__content{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }

    }
`;

function Newsletter() {
    return (
        <Wrapper>
            <div className="section__container">
                <h3 className="section__title">Join our newsletter and get 20% off</h3>
                <div className="newsletter__content">
                    <p className="newsletter__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                    <form className="newsletter__form">
                        <input className="newsletter__input" type="text" placeholder="Enter your email" />
                        <button className="newsletter__btn" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default Newsletter
