import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import Button from 'components/Button'
import Home from 'components/landing/Home'
import EcoSystem from 'components/landing/EcoSystem'
import Buy from 'components/landing/Buy'
import Community from 'components/landing/Community'

const Landing: React.FC = () => {
    return (
        <StyledContainer>
            <Home />
            <EcoSystem /> 
            <Buy />
            <Community />
        </StyledContainer>
    )
}

const StyledContainer = styled(Box)`
`

export default Landing