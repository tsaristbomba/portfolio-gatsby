import React from "react"
import PropTypes from "prop-types"
import { FaBars } from "react-icons/fa"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  LogoSpan,
  MobileIcon,
  NavMenu,
  NavItem,
  NavHashLink,
} from "./Navbar.styles"

const Navbar = ({ handleMenu }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/#home">
          ANDREI<LogoSpan>TELFER.</LogoSpan>
        </NavLogo>
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavHashLink to="/#work">Selected Work</NavHashLink>
          </NavItem>
          <NavItem>
            <NavHashLink to="/about#about">About</NavHashLink>
          </NavItem>
          <NavItem>
            <NavHashLink to="/contact#contact">Contact</NavHashLink>
          </NavItem>
          <NavItem>
            <NavHashLink to="/playlists#playlists">Playlists</NavHashLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

Navbar.propTypes = {
  handleMenu: PropTypes.func,
}

export default Navbar
