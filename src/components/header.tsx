import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
    display: flex;
    justify-content: center;
    font-family: Inter;
`

const Nav = styled.nav`
  display: block;
  background: transparent;
  width: 90%;
  text-align: center;
  padding: 10px 10px 0;
  border-bottom:${props => `1px solid ${props.theme.colors.yellow}`} ;
`
const StyledLi = styled.li`
  display: inline-block;
  padding: 10px 20px 0 10px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.yellow};
`
const Header = () => {
  return (
        <Container>
            <Nav>
                <ul>
                    <StyledLi><StyledLink to={'/'}>Home</StyledLink></StyledLi>
                    <StyledLi><StyledLink to={'/offers/'}>Tours</StyledLink></StyledLi>
                    <StyledLi><StyledLink to={'/handbook/'}>Handbook</StyledLink></StyledLi>
                    <StyledLi><StyledLink to={'/about/'}>About</StyledLink></StyledLi>
                </ul>
            </Nav>
        </Container>
  )
}

export default Header
