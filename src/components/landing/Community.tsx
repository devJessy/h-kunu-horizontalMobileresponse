import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Box ,Divider } from '@material-ui/core'
import AOS from 'aos'

const Community: React.FC = () => {
    useEffect(() => {
        AOS.init({
        });
      }, []);
    return (
        <StyledContainer id="community">
           <SubIndexBox  data-aos="fade-up">
               <SubBox>
                   <img src="/images/community/telegram.png" />
                   <Box>
                       Telegram
                   </Box>
                </SubBox>
               <SubBox>
                   <img src="/images/community/twitter.png" />
                   <Box style={{paddingTop : 18 }}> 
                    Twitter
                   </Box>   
                </SubBox>
               <SubBox>
                   <img src="/images/community/reddit.png" />
                   <Box>
                    Reddit
                   </Box>   
                </SubBox>
               <SubBox>
                   <img src="/images/community/discord.png" />
                   <Box>
                    Discord
                   </Box>
                </SubBox>
               <SubBox>
                   <img src="/images/community/instagram.png" />
                   <Box>
                    Instagram
                   </Box>
                </SubBox>
           </SubIndexBox>
        </StyledContainer>
    )
}

const StyledContainer = styled(Box)`
    background-color : #1D1C24;
    width : 100% ;
    padding-top : 100px ;
    padding-bottom : 100px ;
    // height : 300px;
`
const SubIndexBox = styled(Box)`
    display : flex ;
    flex-direction : row ;
    justify-content : space-evenly ;
    flex-flow : row wrap ;
`
const SubBox = styled(Box)`
    display : flex ;
    flex-direction : column ;
    margin-top : 50px ;
    margin-left : 20px ;
    margin-right : 20px ;
    width : 100px;
    >div {
        color : white ;
        text-align : center ;
    }
`
export default Community;