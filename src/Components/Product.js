import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../Utils/helpers'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Product = ({ images, name, price, id }) => {
  return (
    <Wrapper>
        <div className='container'>
            <img src={images[0]} alt={name} />
            <Link to={`/products/${id}`} className='link'>
                <FontAwesomeIcon icon={faSearch} style={{color:"#fff"}} />
            </Link>
        </div>
        <footer>
            <h5>{name}</h5>
            <p>{formatPrice(price)}</p>
        </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
    .container {
        position: relative;
        background: #000;
        border-radius: 5px;
    }
    img {
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: 5px;
        transition: var(--transition);
    }
    .link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #EF467F;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        transition: var(--transition);
        opacity: 0;
        cursor: pointer;
        svg {
            font-size: 1.25rem;
            color: var(--clr-white);
        }
    }
    .container:hover img {
        opacity: 0.5;
    }
    .container:hover .link {
        opacity: 1;
    }
    footer {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    footer h5,
    footer p {
        margin: 0;
        font-weight: 400;
    }

    footer p {
        color:#EF467F;
        font-size: .9em;
        font-weight: 500;
        letter-spacing: 1px;
    }
`
export default Product