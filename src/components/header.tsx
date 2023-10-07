import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Nav = styled.nav`
  display: block;
  background: transparent;
  width: 90%;
  text-align: center;
  padding: 10px 10px 0;
  border-bottom: solid;
`
const Links = styled.ul`
`
const StyledLi = styled.li`
  display: inline-block;
  padding: 10px 20px 0 10px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
const Header = () => {
  return (
        <Container>
            <Nav>
                <Links>
                    <StyledLi><StyledLink to={'/'}>Home</StyledLink></StyledLi>
                    <StyledLi><StyledLink to={'/offers/'}>Tours</StyledLink></StyledLi>
                    <StyledLi><StyledLink to={'/handbook/'}>Handbook</StyledLink></StyledLi>
                    <StyledLi><StyledLink to={'/about/'}>About</StyledLink></StyledLi>
                </Links>
            </Nav>
        </Container>
  )
}

export default Header
