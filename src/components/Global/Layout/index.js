/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

// Import Components for App
import SideBar from '../../SideBar'
import MenuBar from '../../MenuBar'

// Import Styles
import GlobalStyle from '../../../styles/globalStyles'
import * as S from './styled'

// Component
const Layout = ({ className, children }) => {

  // Render Component
  return (
    <S.LayoutWrapper>
    <GlobalStyle />
      <SideBar/>
      <S.MainWrapper>{children}</S.MainWrapper>
      <MenuBar/>
    </S.LayoutWrapper>
  )
}

// React PropTypes and more...
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
