import React,{useState} from 'react'
import styled from 'styled-components'
import furniture from "../Images/furniture.jpg"

export const Wrapper = styled.section`
    .main__img{
        height: 450px;
    }
    img{
        width: 100%;
        display: block;
        border-radius: 5px;
        object-fit: cover;
    }
    .gallery {
        margin-top: .5rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: .5rem;
        img {
            height: 100px;
            cursor: pointer;
        }
    }

    @media (min-width:800px){
        .gallery{
            margin-bottom: 3rem;
        }
    }
    
`;



function ProductImages( { images } ) {

    const [main, setMain] = useState(images[0]);
    
    return (
        <Wrapper>
            <img src={main} alt="main " className="main__img" />
            <div className="gallery">
                {
                    images.map((image,index)=>{
                        return <img key={index} src={image} alt="sdfds" className="secondary__img" onClick={()=>{setMain(images[index])}}/>
                    })
                }
            </div>
        </Wrapper>
    )
}

export default ProductImages
