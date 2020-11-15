import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #4a4a4a;
    font-weight: 600;
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
		transition: all 5ms;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`

const activeLinkStyle = {
  borderBottom: '2px solid #4a4a4a',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name} activeStyle={activeLinkStyle}>
              <Link to={link.slug}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
