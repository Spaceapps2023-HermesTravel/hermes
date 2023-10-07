import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import Theme, { GlobalStyle } from '../../Theme'

const Offers: React.FC<PageProps> = () => {
  return (
        <Theme>
            <GlobalStyle/>
            <main>
            </main>
        </Theme>
  )
}

export default Offers

export const Head: HeadFC = () => <title>Offers</title>
