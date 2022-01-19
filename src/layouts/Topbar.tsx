import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

const Topbar: React.FC = () => {
    const [_showNavBar, setShowNavBar] = useState(false);
    
    const hamburgerLine1 = useRef<any>(null);
    const hamburgerLine2 = useRef<any>(null);
    const hamburgerLine3 = useRef<any>(null);
    const _NavBarRef     = useRef<any>(null);
    const _closeBtn      = useRef<any>(null);
    
    const handleNavigate = ( handler : any ) => {
        document.getElementById(handler)?.scrollIntoView({ behavior: 'smooth' })
    }
    
    const styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
    return (
        <StyledContainer>
            <>
            <Header>
                <Logo>
                    <img src="/images/logo.png" alt='' />
                </Logo>
                <NavBar>
                    <NavList>
                        <li><a onClick={()=>handleNavigate('ecosystem')}>EcoSystem</a></li>
                        <li><a onClick={()=>handleNavigate('buy')}>Buy</a></li>
                        <li><a href="https://kunuswap.com/#/swap" target="_blank">KunuSwap</a></li>
                        <li><a onClick={()=>handleNavigate('community')}>Community</a></li>
                    </NavList>
                    
                </NavBar>
            </Header>
            <MobileHeader>
                <MobileLogo>
                    <img src="/images/landing/logo.png" alt='' />
                </MobileLogo>
                <Menu   right>
                    <a className="bm-item"  onClick={()=>handleNavigate('ecosystem')}>EcoSystem</a>
                    <a className="bm-item"  onClick={()=>handleNavigate('buy')}>Buy</a>
                    <a className="bm-item"  href="https://kunuswap.com/#/swap" target="_blank">KunuSwap</a>
                    <a className="bm-item" onClick={()=>handleNavigate('community')}>Community</a>
                    <MobileNarutoBack>
                        <img  style={{width : 250}} src="/images/landing/naruto.png" />
                    </MobileNarutoBack>
                </Menu>
                
            </MobileHeader>
        </>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
/* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: white;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: white;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  background-image : url('/images/landing/mobile-hamburger.png');
  background-size : 100% 100% ;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
  opacity : 0.8;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 1.5em;
}

/* Individual item */
.bm-item {
  display: inline-block;
  color : white ;
  font-size : 20px ;
  font-weight : bolder;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
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
    @media screen and (min-width : 980px) {
        width : 980px;
        // left : calc((100% - 980px) / 2);
        visibility : visible;
    }
    @media screen and (min-width : 1400px) {
        width : 1400px;
        left : calc((100% - 1400px) / 2);
        visibility : visible;
    }
`;

const Logo = styled(Box)`
    display : flex ;
    // width : ;
    >img {
        
        width : 55px ;
        height : 55px ;
        @media screen and (min-width : 1400px){
            margin-left : 50px;
        }
    }
`

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
    position : fixed ;
    top : 0px; 
    left : 0px ;
    // background-color : black ;
    display : block ;
    height : 60px;
    width : 100%;
    z-index : 9999;
    @media screen and (min-width : 980px){
        display : none ;
    }
`
const MobileLogo = styled(Box)`
    position : absolute ;
    top : 30px ;
    left : 20px;
    >img {
        height : 50px;
    }    
`

const HamburgerButton = styled.button`
    position : absolute ;
    right : 50px ;
    width : 50px;
    height : 50px;

`

const MobileNarutoBack = styled(Box)`
    display : flex !important;
    margin-top : 30px ;
    justify-content: center;
`
export default Topbar;