import styled from "styled-components"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import { primary, secondary, tertiary } from "../../data/colors"

export const Nav = styled.nav`
  background: ${primary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding-left: 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 24px;
  }
`
export const NavLogo = styled(Link)`
  font-size: 22px;
  cursor: pointer;
  text-decoration: none;
  color: ${secondary};
  display: flex;
  align-items: center;
  font-weight: bolder;
`
export const LogoSpan = styled.span`
  font-size: 22px;
  color: ${primary};
  background: ${secondary};
  padding: 2px 4px;
  border-radius: 0 8px 8px 0;
  margin-left: 4px;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${secondary};
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavHashLink = styled(Link)`
  color: ${secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  letter-spacing: 1.1px;
  transition: 0.2s ease;

  &.active {
    color: ${tertiary};
  }

  &:hover {
    color: ${tertiary};
  }
`
