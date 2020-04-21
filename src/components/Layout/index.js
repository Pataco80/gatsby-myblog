/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

// Import Components for App
import Profile from "../Profile"

// Import Styles
import styled from "styled-component"

// Component
const Layout = ({ children }) => {

  // Render Component
  return (
    <>
      <aside>
        <Profile />
      </aside>
      <main>{children}</main>
    </>
  )
}

// React PropTypes and more...
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// Styles from styled-components


export default Layout
