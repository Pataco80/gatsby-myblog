import styled from 'styled-components'
import { setFlex } from '../../styles/helpers'
import media from 'styled-media-query'

export const MainMenuWrapper = styled.nav`
display:none;
background-color:var(--mediumBackground);
position: relative;
width:100%;
height:auto;

${media.greaterThan('medium')`
  ${setFlex({flDir:'column',y:'center'})};
  padding:0;
`}
`