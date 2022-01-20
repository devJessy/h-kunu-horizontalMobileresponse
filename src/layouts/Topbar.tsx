
import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import { Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { slide as Menu, State } from 'react-burger-menu'

const Topbar: React.FC = () => {
    const styles = {
        bmMenuWrap: {
          transition: 'push'
        }
      }
    const [_showNavBar, setShowNavBar] = useState(false);
    const _mobileContainer = useRef<any>(null);

    
    const handleNavigate = ( handler : any ) => {
        document.getElementById(handler)?.scrollIntoView({ behavior: 'smooth' })
        setShowNavBar(false);
    }
    
    const showMobileMenu = () => {
        setShowNavBar(!_showNavBar)
    }
    const closeMenu = () => {
        setShowNavBar(false);
    }


 
    return (
        <StyledContainer>
            <>
            <Header>
                <NavBar>
                    <NavList>
                        <li><a onClick={()=>handleNavigate('home')}>Home</a></li>
                        <li><a onClick={()=>handleNavigate('ecosystem')}>EcoSystem</a></li>
                        <li><a onClick={()=>handleNavigate('buy')}>Buy</a></li>
                        <li><a href="https://kunuswap.com/#/swap" target="_blank">KunuSwap</a></li>
                        <li><a onClick={()=>handleNavigate('community')}>Community</a></li>
                    </NavList>
                    
                </NavBar>
            </Header>
            <OpenButtonBox onClick={showMobileMenu}>
                <Box/>
                <Box/>
                <Box/>
            </OpenButtonBox>
            <MobileHeader>
                <MobileContainer ref={_mobileContainer} active={_showNavBar}>
                    {/* <img src="/images/assets/close.png"  onClick={showMobileMenu}/> */}
                    <svg onClick={showMobileMenu} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CloseIcon"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                    <a onClick={()=>handleNavigate('home')}>Home</a>
                    <a onClick={()=>handleNavigate('ecosystem')}>EcoSystem</a>
                    <a onClick={()=>handleNavigate('buy')}>Buy</a>
                    <a href="https://kunuswap.com/#/swap" target="_blank">KunuSwap</a>
                    <a onClick={()=>handleNavigate('community')}>Community</a>
                </MobileContainer>

                
            </MobileHeader>
        </>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`

`



const NavBar = styled(Box)`
    // background-image : url('/images/landing/Loading_Bar 2.png');
    // background-size : cover ;
    // background-repeat : no-repeat;
    
`;

const Header = styled(Box)`
    display : flex;
    flex-direction : row;
    width : 90%;
    margin : auto;
    padding-top : 14px ;
    justify-content: space-between ;
    position : fixed ;
    top : 0px;
    left : 50px;
    align-items: center;
    z-index : 9999;
    visibility : hidden;
    display: flex;
    justify-content: right ;
    @media screen and (min-width : 980px) {
        // width : 980px;
        // left : calc((100% - 980px) / 2);
        visibility : visible;
    }
    @media screen and (min-width : 1400px) {
        // width : 1400px;
        // left : calc((100% - 1400px) / 2);
        visibility : visible;
    }
`;



const NavList = styled.ul`
    background-image : url('/images/landing/Loading_Bar 2.png');
    background-size : cover ;
    background-repeat : no-repeat;
    padding-top : 20px;
    cursor : pointer ;
    >li {
        list-style : none ;
        display : inline-block;
        height: 39px;
        position: relative;
        box-sizing: border-box;
        overflow: visible;
        visibility: inherit;
        padding-left : 20px;
        
        >a {
            font-size : 25px;
            font-family : Lancelot ;
            color : white;
            text-decoration: none;
            &:hover {
                color : rgb(243,167,143);
                transition: color .4s ease 0s;
            }
        }
    }
    display : none ;
    @media screen and (min-width : 980px) {
        display : block ;
    }
`;

const MobileHeader = styled(Box)`
    height : 0px ;
    // overflow : hidden ;
    position : fixed ;
    top : 0px; 
    right : 0px ;
    // background-color : black ;
    display : block ;
    width : 100%;
    z-index : 9999;
    @media screen and (min-width : 980px){
        display : none ;
    }
    >img {
        width : 50px;
        height  : 50px;
       
    }
`

interface MobileContainerProps{
    ref : any
    active: any
}

const MobileContainer = styled(Box)<MobileContainerProps>`
    height : 100vh;
    position : absolute ;
    transition:  .2s ease;
    display : flex ;
    flex-direction : column ;
    text-align : left ;
    background-color : rgb(2, 0, 5) ;
    width : 100% ;
    padding : 20px ;
    padding-top : 70px ;
    transform : translateY(${({ active }) => active ? 0:-100}%) translateZ(0px);
    >a {
        color : white ;
        font-size : 25px ;
        font-weight : bold ;
        line-height: 2;
    }
    >svg {
        position : absolute ;
        top : 20px ;
        right : 20px ;
        width : 30px;
        height  : 30px;
        background : white ;
    }
`

const OpenButtonBox = styled(Box)`
    display : block ;
    position : fixed ;
    top : 20px ;
    right : 20px ;
    z-index : 100;
    >img {
        width : 40px;
        height  : 40px;
    }
    @media screen and (min-width : 980px){
        display : none ;
    }   
    >div {
        width: 35px;
        height: 5px;
        background-color: white;
        margin: 6px 0;
    }
`

export default Topbar;