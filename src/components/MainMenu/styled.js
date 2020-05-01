import styled from 'styled-components'
import { setFlex } from '../../styles/helpers'
import media from 'styled-media-query'

export const MainMenuWrapper = styled.nav`
width:100%;
height:auto;
display:none;

&.isOpen {
${setFlex({flDir:'column-reverse',x:'center',y:'center'})};
}

${media.greaterThan('medium')`
  ${setFlex({flDir:'column',y:'center'})};
`}
`