import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../components/header';
import Theme, { GlobalStyle } from '../Theme';

const IndexPage: React.FC<PageProps> = () => {
  return (
        <Theme>
            <GlobalStyle/>
            <Header/>
            <main>

            </main>
        </Theme>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
