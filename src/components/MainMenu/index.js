import React from 'react'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

import * as S from './styled'

const MainMenu = ({className}) => (
    <S.MainMenuWrapper className={className}>
      <SocialLinks />
      <MenuLinks />
    </S.MainMenuWrapper>
  )

export default MainMenu
