import React from 'react'

// Import Components for App
import links from './pathLinks'

// Import Styles
import getThemeColor from '../../utils/getThemeColor'
import * as S from './styled'

// Component
const MenuLinks = () => (

  // Render Component
  <S.MenuLinksrWrapper>
    <S.MenuLinksList>
      {links.map((link,i) => {

        // Return Links
        return(
          <S.MenuLinksItem Key={i}>
            <S.MenuLinkLink to={link.url} title={link.label} activeClassName='active' cover direction='left' duration={0.6} bg={getThemeColor()}>
              {link.label}
            </S.MenuLinkLink>
          </S.MenuLinksItem>
        )
      })}
    </S.MenuLinksList>
  </S.MenuLinksrWrapper>
)

export default MenuLinks
