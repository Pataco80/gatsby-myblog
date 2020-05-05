import React from 'react'

// Import Components for App
import Profile from '../Profile'
import MainMenu from '../MainMenu'

// Import Styles
import * as S from './styled'

// Component
const SideBar = ({className}) => (

  // Render Component
  <S.SideBarWrapper>
    <Profile />
    <MainMenu />
  </S.SideBarWrapper>
)

export default SideBar
