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
  NavLink,
} from "./Navbar.styles"
import { quaternary, quinary } from "../../data/colors"

const Navbar = ({ handleMenu }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <span>T</span>
          <LogoSpan>F</LogoSpan>
        </NavLogo>
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              to="/work/"
              activeStyle={{
                color: quaternary,
                textShadow: `${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px`,
              }}
            >
              Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/about/"
              activeStyle={{
                color: quaternary,
                textShadow: `${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px`,
              }}
            >
              About
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              to="/contact"
              activeStyle={{
                color: quaternary,
                textShadow: `${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px`,
              }}
            >
              Contact
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              to="/blog/"
              activeStyle={{
                color: quaternary,
                textShadow: `${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px`,
              }}
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/playlists/"
              activeStyle={{
                color: quaternary,
                textShadow: `${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px`,
              }}
            >
              Playlists
            </NavLink>
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
