import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const Footer: React.FC = () => {
    return (
        <StyledContainer>
            @Copyright 2022 . All rights reserved by Kunu Team
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
    background-color : #18171F;
    text-align : center ;
    font-size : 20px;
    color : white ;
    padding : 20px ;
`

export default Footer;