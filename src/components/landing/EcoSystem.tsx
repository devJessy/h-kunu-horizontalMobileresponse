import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Box} from '@material-ui/core'
import AOS from 'aos'

const EcoSystem: React.FC = () => {
    useEffect(() => {
        AOS.init({
        });
      }, []);

    return (
        <StyledContainer id="ecosystem">
            <NarutoBox />
                {/* <img src="/images/landing/naruto.png" /> */}
            {/* </NarutoBox> */}
            <PageContainer>
                <Title  data-aos="fade-up" data-aos-duration="1000">KUNU Ecosystem</Title>   
                <SubTitle><h2>Kurama Inu token</h2></SubTitle>
                <SubIndexBox data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <SubBox>
                        <SubIndexImage>
                            <img src="/images/landing/logo.png" />
                        </SubIndexImage>
                        <SubIndexTitle>
                            Passive income system
                        </SubIndexTitle>
                        <SubIndexContent>
                            4% of every transaction with Kurama Inu is
                            deducted and redistributed to our pool of holders.
                            It means that just by holding it you will see the number
                            of tokens increasing automatically everyday as the
                            Community buy or sell the Token.
                        </SubIndexContent>
                    </SubBox>
                    <SubBox>
                        <SubIndexImage>
                            <img src="/images/landing/logo.png" />
                        </SubIndexImage>
                        <SubIndexTitle>
                            Deflationary Currency
                        </SubIndexTitle>
                        <SubIndexContent>
                            4% of the amount of all transaction is send
                            To the locked liquidity pool and after unlocks it will
                            Be sent to a dead wallet and burned forever, meaning
                            That our token supply constantly decreasing and making
                            Your KUNU increase in value over time.
                        </SubIndexContent></SubBox>
                    <SubBox>
                        <SubIndexImage>
                            <img src="/images/landing/logo.png" />
                        </SubIndexImage>
                        <SubIndexTitle>
                            Anti-Pump&Dump Trap
                        </SubIndexTitle>
                        <SubIndexContent>
                            Kurama have a feature that prevent whales from trying to manipulate the token
                            price, meaning that transactions can not exceed a specific % from the
                            circulation supply.
                        </SubIndexContent></SubBox>
                </SubIndexBox>
            </PageContainer> 
        </StyledContainer>
    )
}

const StyledContainer = styled(Box)`
    background-image : url('/images/landing/Section-1.png');
    background-size : 100% 100%;
    background-repeat : no-repeat ;
    width : 100%;
    min-height : 100vh;
`

const PageContainer = styled(Box)`
    width : 100% ;
    padding-top : 130px ;
    color : white ;
    display : flex ;
    flex-direction : column ;
    @media screen and (min-width : 1400px ){
        width : 1400px ;
        margin : auto ;
        padding-top : 130px ;
    }
    z-index : 10 ;
`;


const Title = styled(Box)`
    z-index : 10 ;
    font-size : 30px;
    width : 100% ;
    padding-left : 50px ;
    @media screen and (min-width : 1400px ){
        margin-left : 0px ;
    }
`

const SubTitle = styled(Box)`
    z-index : 10 ;
    font-size : 45px ;
    text-align : center ;
    width : 100% ;
    margin-top : 20px;
    >h2 {
        font-size: 48px;
        font-weight: 800;
        background: -webkit-linear-gradient(
        45deg
        ,#9100ff,#ff0082);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
    }
`
const SubIndexBox = styled(Box)`
    z-index : 10 ;
    display : flex ;
    flex-direction : row ;
    justify-content : space-evenly ;
    flex-flow : row wrap ;
`
const SubBox = styled(Box)`
    display : flex ;
    flex-direction : column ;
    margin-top : 80px ;
    margin-left : 20px ;
    margin-right : 20px ;
    width : 400px;
`

const SubIndexImage = styled(Box)`
    display: flex;
    justify-content: center;
    >img {
        width : 150px ;
        height : 150px ;
    }
`   

const SubIndexTitle = styled(Box)`
    font-size : 25px ;
    font-weight : bold;
    margin-top : 30px ;
`

const SubIndexContent = styled(Box)`
    font-size : 15px;
    line-height: 2;
    margin-top : 15px;
`
const NarutoBox = styled(Box)`
    // background-image : url('/images/landing/naruto.png');
    // background-size : 100% 100% ;
    position : absolute ;
    top : 0px ;
    right : 0px ;
    z-index : 1 ;
    width : 400px;
    height : 100vh;
    @media screen and (min-width : 1400px ){
        background-image : url('/images/landing/naruto.png');
        background-size : 100% 100% ;
    }
`

export default EcoSystem;