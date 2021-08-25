import React,{useState,useEffect, useLayoutEffect,useRef} from 'react'
import styled from "styled-components"
import CartLogin from './CartLogin';

import Logo from './Logo'
import MenuIcon from './MenuIcon';
import NavElements from './NavElements';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`;

export const NavContainer = styled.div`
    padding: 1rem 2rem;
     @media (min-width:800px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1170px;
        margin: 0 auto;
        
        height: 4rem;
     }
`;
export const LinksContainer = styled.div`
    overflow: hidden;
    
    @media (min-width:800px){
        display: flex;
        justify-content: space-between;
        max-width: 1170px;
        height: 4rem;
        align-items: center;
        margin-inline-start: 0;
        
     }
`;


function NavBar() {
    const [showLinks,setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const ButtonsRef = useRef(null);

    useEffect(() => {
        //this function return the height of all the links 
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        const buttonsHeight = ButtonsRef.current.getBoundingClientRect().height;
        if(window.innerWidth <800){
            if(showLinks){
                linksContainerRef.current.style.height = `${linksHeight +buttonsHeight*1.2}px`;
            }else{
                linksContainerRef.current.style.height = "0px";
            }
        }
        console.log("used");
    }, [showLinks]);



    //this function updates the width of the screen whenever it changes
    //it uses "useLayoutEffect" which has the same functionality of "useEffect"
    //it returns a size variabele that we can use everywhere on our code
    function useWindowSize() {
        const [size, setSize] = useState(0);

        useLayoutEffect(() => {

            function updateSize() {
                setSize(window.innerWidth);
            }

            window.addEventListener('resize', updateSize);

            updateSize();

            return () => window.removeEventListener('resize', updateSize);
        }, []);

        return size;
    }

    const width = useWindowSize();

    useEffect(() => {
        if(width >=800){
            linksContainerRef.current.style.height = "3rem";
        }else if(width <800) {
            linksContainerRef.current.style.height = "0";
        }else{} 
       
    }, [width])



    return (
        <nav>
            <NavContainer>
                <Wrapper>
                    <Logo />
                    <MenuIcon showLinks={showLinks} setShowLinks={setShowLinks}/>
                </Wrapper>
                <LinksContainer ref={linksContainerRef}>
                    <NavElements   linksRef={linksRef}/>
                    <CartLogin ButtonsRef={ButtonsRef}/>
                </LinksContainer>
            </NavContainer>
        </nav>
    )
}

export default NavBar
