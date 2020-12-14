import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import GlobalStyle from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  // initiate animate on scroll
  useEffect(() => {
    AOS.init({ duration: 600 })
  })
  //

  // open/close mobile menu
  function handleMenu() {
    setIsOpen(!isOpen)
  }
  //

  return (
    <>
      <GlobalStyle />
      <Sidebar handleMenu={handleMenu} isOpen={isOpen} />
      <Navbar handleMenu={handleMenu} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
