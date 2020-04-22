import React from 'react'

// Import Components for App
import Profile from '../../Profile'

// Import Styles
import * as S from './styled'

// Component
const SideBar = () => {

  // Render Component
  return (
    <S.SideBarWrapper>
      <Profile />
    </S.SideBarWrapper>
  )
}

export default SideBar
