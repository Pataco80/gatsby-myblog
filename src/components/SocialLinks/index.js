import React from 'react'

// Import Components for App
import Icons from './icons'
import links from './pathLinks'

// Import Styles
import * as S from './styled'

// Component
const SocialLinks = () => (

  // Render Component
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link,i) => {
        const Icon = Icons[link.label]
        
        // Return Links
        return(
          <S.SocialLinksItem Key={i}>
            <S.SocialLinksLink href={link.url} title={link.label} target='_blank' rel='noopener norreferrer'>
              <S.IconWrapper>
                <Icon/>
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
    })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks
