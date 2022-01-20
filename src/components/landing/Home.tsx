import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import Button from 'components/Button'
import AOS from 'aos'

const Home: React.FC = () => {
    useEffect(() => {
        AOS.init({
        });
      }, []);

    return (
        <StyledContainer id="home">
                <EntryPage data-aos="fade-right"  data-aos-duration="1000">
                    <Box>
                        <img src='/logo.png' alt="logo" width={150} />
                    </Box>
                    <Box fontSize={49} maxWidth={650} mt={"80px"} fontFamily={'Myriad Pro Semibold'}>
                        YOUR HEADING AND TEXT WILL COME HERE.
                    </Box>
                    <Box fontSize={19} maxWidth={580} mt={"15px"}>
                        Subheding and content text will come here. Subheding and content text will come here. Subheding and content text will come here. Subheding and content text will come here.
                    </Box>
                    <ButtonGroup >
                        <a href='https://app.uniswap.org/#/swap?outputCurrency=0xe49cb97091b5bde1e8b7043e3d5717e64fde825e' target={'_blank'} rel="noreferrer" data-aos="fade-up" data-aos-duration="500">
                            <Button type="secondary">Buy Now</Button>
                        </a>
                        <a href='https://kunuswap.com/#/swap' data-aos="fade-up"  data-aos-duration="1000">
                            <Button type="primary">KunuSwap</Button>
                        </a>
                        <a href='https://kuramainueth.com/wp-content/uploads/2022/01/4_5969553075952684610-1.pdf' data-aos="fade-up"  data-aos-duration="1500">
                            <Button type="primary">White Paper</Button>
                        </a>
                    </ButtonGroup>
                </EntryPage>
                <MainImage data-aos="zoom-in" data-aos-duration="1000">
                    <img src='/images/mainimg.png' alt="mainimg" height={"100%"} width={"100%"} />
                </MainImage>
        </StyledContainer>
    )
}
const MainImage = styled(Box)`
    position : absolute;
    right : 0;
    top : 0;
    height : 100%;
    max-width : calc(100vh * 1132 / 1592);
    @media screen and (max-width : 1500px){
        height : 100%;
        width : 50%;
    }
    @media screen and (max-width : 750px){
        display : none;
    }
`;
const ButtonGroup = styled(Box)`
    display : flex;
    margin-top : 40px;
    >a>div{
        margin-right : 10px;
        margin-bottom : 10px;
    }
    @media screen and (max-width : 700px){
        flex-direction : column;
        >a>div{
            width : 100%;
        }
    }
`;
const StyledContainer = styled(Box)`
    min-height : 100vh;
    width : 100%;
    background-image : url('/images/background.png');
    background-size : auto 100%;
    position : relative;
    background-position: right 35%;
    @media screen and (min-width : 750px){
        background-size : 100% 100%;
        
    }
`
const EntryPage = styled(Box)`
    position : relative;
    z-index : 10;
    padding : 80px 150px 0px 150px;
    color : white;
    @media screen and (max-width : 800px){
        padding : 80px 80px 0px 80px;
    }
    @media screen and (max-width : 650px){
        padding : 80px 30px 0px 30px;
    }
    @media screen and (max-width : 500px){
        >div:nth-of-type(2){
            font-size : 30px;
        }
    }
`
export default Home;