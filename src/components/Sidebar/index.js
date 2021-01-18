import React from "react"
import PropTypes from "prop-types"
import {
  SidebarContainer,
  IconWrapper,
  CloseIcon,
  SidebarMenu,
  SidebarHashLink,
} from "./Sidebar.styles"

const Sidebar = ({ handleMenu, isOpen }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <IconWrapper onClick={handleMenu}>
        <CloseIcon />
      </IconWrapper>
      <SidebarMenu>
        <SidebarHashLink onClick={handleMenu} to="/work#">
          Work
        </SidebarHashLink>
        <SidebarHashLink onClick={handleMenu} to="/about#">
          About
        </SidebarHashLink>
        {/* <SidebarHashLink onClick={handleMenu} to="/contact#">
          Contact
        </SidebarHashLink> */}
        <SidebarHashLink onClick={handleMenu} to="/blog#">
          Blog
        </SidebarHashLink>
        <SidebarHashLink onClick={handleMenu} to="/playlists#">
          Playlists
        </SidebarHashLink>
      </SidebarMenu>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  handleMenu: PropTypes.func,
  home: PropTypes.bool,
  isOpen: PropTypes.bool,
}

export default Sidebar
