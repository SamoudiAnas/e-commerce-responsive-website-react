import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{ useContext } from 'react'
import {BrowserRouter as Router ,Link} from "react-router-dom"
import styled from 'styled-components'
import { CartContext } from '../../Contexts/CartContext'



export const Wrapper = styled.div`
   .cart__btn, .login__btn{
       margin:10px 0;
       margin-left: 20px;
   }


   .cart__icon{
        margin-left: 5px;
        position: relative;
   }
   .cart__count{
        background-color: #EF476F;
        position: absolute;
        top: -10px;
        right: -16px;
    
        width: 2px;
        height:2px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.75rem;
        color: white;
        padding: 10px;
   }

   .login__btn{
       font-family: "Poppins",sans-serif;
       font-weight: 500;
       font-size: 1em;
       padding-left: 0;
       background-color: transparent;
       border: transparent;
   }


   @media (min-width:800px){
       display: flex;

   }






`;


















function CartLogin({ButtonsRef}) {
    const [cartCount,setCartCount] =  useContext(CartContext);
    return (
        <Wrapper ref={ButtonsRef}>
            <Router>
                <Link to="/" className="cart__btn">
                
                Cart
                <span className="cart__icon">
                    <FontAwesomeIcon icon={faCartPlus} />
                    <span className="cart__count">
                        {cartCount}
                    </span>
                </span>
            </Link>
            </Router>
            <div >
                <button type="button" className="login__btn">Login</button>
            </div>
        </Wrapper>
    )
}

export default CartLogin
