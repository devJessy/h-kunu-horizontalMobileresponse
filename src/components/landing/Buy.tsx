import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Box ,Divider } from '@material-ui/core'
import AOS from 'aos'

const Buy: React.FC = () => {
    useEffect(() => {
        AOS.init({
        });
      }, []);
    return (
        <StyledContainer id="buy">
            <PageContainer  data-aos="fade-up">
                <SubIndexBox>
                    <SubIndexNumber>1</SubIndexNumber>
                    <LineComponent />
                    <ContentBox>
                        <SubTitle>Connect Wallet</SubTitle>
                        <SubContent>
                            Kurama have a feature that prevent whales from trying to manipulate the token price
                        </SubContent>
                    </ContentBox>
                </SubIndexBox>
                <Divider style={{ backgroundColor : '#1D1C24', marginLeft : 50, marginRight : 50 }}/>
                <SubIndexBox>
                    <SubIndexNumber>2</SubIndexNumber>
                    <LineComponent />
                    <ContentBox>
                        <SubTitle>Connect Wallet</SubTitle>
                        <SubContent>
                            Kurama have a feature that prevent whales from trying to manipulate the token price
                        </SubContent>
                    </ContentBox>
                </SubIndexBox>
                <Divider style={{ backgroundColor : '#1D1C24', marginLeft : 50, marginRight : 50 }}/>
                <SubIndexBox>
                    <SubIndexNumber>3</SubIndexNumber>
                    <LineComponent />
                    <ContentBox>
                        <SubTitle>Connect Wallet</SubTitle>
                        <SubContent>
                            Kurama have a feature that prevent whales from trying to manipulate the token price
                        </SubContent>
                    </ContentBox>
                </SubIndexBox>
                <Divider style={{ backgroundColor : '#1D1C24', marginLeft : 50, marginRight : 50 }}/>
                <SubIndexBox>
                    <SubIndexNumber>4</SubIndexNumber>
                    <LineComponent />
                    <ContentBox>
                        <SubTitle>Connect Wallet</SubTitle>
                        <SubContent>
                            Kurama have a feature that prevent whales from trying to manipulate the token price
                        </SubContent>
                    </ContentBox>
                </SubIndexBox>
            </PageContainer>
        </StyledContainer>
    )
}

const StyledContainer = styled(Box)`
    background-color : #1D1C24;
    width : 100% ;
    min-height : 100vh;
    padding : 150px 0px 50px 0px;
`

const PageContainer = styled(Box)`
    background-color : #18171F;
    border-radius : 15px;
    width : 90%;
    margin-left : 20px;
    margin-top : 20px;
    display : flex ;
    flex-direction : column ;

    @media screen and (min-width : 1400px ){
        width : 1400px ;
        margin : auto ;
    }
`

const SubIndexBox = styled(Box)`
    display : flex ;
    flex-direction : row ;
    position : relative ;
    padding : 50px;
    @media screen and (max-width : 800px)
    {
        flex-direction : column ;
    }
`

const SubIndexNumber = styled(Box)`
    height : 60px ;
    width : 60px ;
    border-radius : 40px ;
    background-color : #1D1C24;
    color : white ;
    padding: 25px;
    font-size: 25px;
    padding-top: 12px;
    align-items: center;
    text-align: center;
`
const LineComponent = styled(Box)`
    border-radius : 1px;
    width : 70px;
    border-bottom : 2px solid #5F3B25 ;
    position : absolute ;
    top : 80px ;
    left : 150px ;
    @media screen and (max-width : 800px)
    {
        display : none ;
    }
`

const ContentBox = styled(Box)`
    display : flex ;
    flex-direction : column ;
    color : white ;
    margin-top : 10px ;
    margin-left : 150px;
    @media screen and (max-width : 800px)
    {
        margin-left : 0px;
    }
`

const SubTitle = styled(Box)`
    font-size : 30px; 
    font-weight : bolder ;
`

const SubContent = styled(Box)`
    font-size : 16px;
    margin-top : 15px;
`

export default Buy;