import React, { useState } from 'react'
import styled from 'styled-components'


export const Wrapper = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem 2rem;

    .counter__container{
        .minus, .plus{
            color: white;
           padding: .6em 1.5em;
            background-color:  #EF467F;
            border: 2px solid #EF467F;
        }
        
        .minus{
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        

        .plus{
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
        }

        .counter{
            font-weight: 600;
            padding: .6em 1.5em;
            border: 2px solid #EF467F;
        }




    }


    @media (min-width:800px){

        .counter__container{
            margin-bottom: 0;
        }
    }

`;


function AddToCart() {
    const [counter,setCounter] = useState(1);

    const minus =()=>{
        if(counter === 1){
            setCounter(1);
        }
        else{
            setCounter(counter-1);
        }
    }

    const plus =()=>{
        setCounter(counter+1);
    }


    return (
        <Wrapper>
            <div className="counter__container">
                <span className="minus" onClick={minus}>-</span>
                <span className="counter">{counter}</span>
                <span className="plus" onClick={plus}>+</span>
            </div>            
            <button className="hero__btn">Add to cart</button>
        </Wrapper>
    )
}

export default AddToCart
