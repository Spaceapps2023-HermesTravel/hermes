import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../components/header'
import Theme, { GlobalStyle } from '../Theme'
import styled from 'styled-components'
import imageBg from '../images/imageBg.svg';
import {Link} from "gatsby";

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  
  width: 100%;
`

const HeadlineContainer = styled.div`
  color: ${props => props.theme.colors.yellow};

  width: 90vw;
`
const StyledH2 = styled.h2`
  font-family: Inter;
`
const StyledH1 = styled.h1`
  display: block;
  
  font-family: ron;
  font-size: 2em; 
`

const StyledH3 = styled.h3`
  color: ${props => props.theme.colors.yellow};
  font-family: Inter;
`
const OfferBoxContainer = styled.div`
  display: flex;
  gap:10px;
`
const OfferBox = styled(Link)`
  border-radius: 40px;
  background-color: #FFF;
  height: 400px;
  flex: 0 0 25%;
`
const IndexPage: React.FC<PageProps> = () => {
  return (
        <Theme>
            <GlobalStyle/>
            <Header/>
            <main>
                <BackgroundImage src={imageBg}/>
                <HeadlineContainer>
                    <StyledH2>
                       FROM OUTER SPACE TO OLIMPUS
                    </StyledH2>
                    <StyledH1>
                       HERMES
                    </StyledH1>
                </HeadlineContainer>
                <StyledH3>Destinations ready to EXPLORE:</StyledH3>
                <OfferBoxContainer>
                    <OfferBox to={'/'}/>
                    <OfferBox to={'/'}/>
                    <OfferBox to={'/'}/>
                    <OfferBox to={'/'}/>
                </OfferBoxContainer>
            </main>
        </Theme>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
