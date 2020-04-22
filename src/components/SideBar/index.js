import React from 'react'

// Import Components for App
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

// Import Styles
import * as S from './styled'

// Component
const SideBar = () => {

  // Render Component
  return (
    <S.SideBarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.SideBarWrapper>
  )
}

export default SideBar
