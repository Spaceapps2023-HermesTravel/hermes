import * as React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
  background: transparent;
`
const Links = styled.ul`
  display: flex;
`
const Header = () => {
  return (
        <Nav>
            <Links>
                <li>Home</li>
                <li>Tours</li>
                <li>Handbook</li>
                <li>About</li>
            </Links>
        </Nav>
  )
}

export default Header;
