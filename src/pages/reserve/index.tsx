import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import Theme, { GlobalStyle } from '../../Theme'

const Reserve: React.FC<PageProps> = () => {
  return (
        <Theme>
            <GlobalStyle/>
            <main>
            </main>
        </Theme>
  )
}

export default Reserve

export const Head: HeadFC = () => <title>Reserve</title>
