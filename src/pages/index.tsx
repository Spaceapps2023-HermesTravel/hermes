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
const IndexPage: React.FC<PageProps> = () => {
  return (
        <Theme>
            <GlobalStyle/>
            <Header/>
            <main>
                <BackgroundImage src={imageBg}/>
            </main>
        </Theme>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
