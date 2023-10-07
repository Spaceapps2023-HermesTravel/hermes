import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../components/header'
import Theme, { GlobalStyle } from '../Theme'
import styled from 'styled-components'
import imageBg from '../images/imageBg.svg';

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  
  width: 100%;
`

const HeadlineContainer = styled.div`
  text-align: right;
  color: ${props => props.theme.colors.yellow};
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`
const Subheadline = styled.h2`
  font-family: Inter;
`
const Headline = styled.h1`
  display: block;
  
  font-family: ron;
  
`
const IndexPage: React.FC<PageProps> = () => {
  return (
        <Theme>
            <GlobalStyle/>
            <Header/>
            <main>
                <BackgroundImage src={imageBg}/>
                <HeadlineContainer>
                    <Subheadline>
                       FROM OUTER SPACE TO OLIMPUS
                    </Subheadline>
                    <Headline>
                       HERMES
                    </Headline>
                </HeadlineContainer>

            </main>
        </Theme>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
