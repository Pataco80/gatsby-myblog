import styled from 'styled-components'
import { setFlex, setBorder, setPxToRem } from '../../styles/helpers'
import media from 'styled-media-query'

export const SideBarWrapper = styled.aside`
  ${setFlex({flDir:'column'})};
  position:fixed;
  border-bottom:${setBorder({size:2})};
  padding:${setPxToRem(8)} ${setPxToRem(16)};
  text-align:center;
  background-color: var(--mediumBackground);
  width:100vw;
  z-index:10;

  ${media.greaterThan('medium')`
    ${setFlex({flDir:'column',x:'flex-start',y:'center'})};
    position:fixed;
    border-right:${setBorder({size:2})};
    height:100vh;
    width:${setPxToRem(190)};
    padding:${setPxToRem(32)} ${setPxToRem(16)};
  `}

  ${media.greaterThan('large')`
    width:${setPxToRem(260)};
    padding:${setPxToRem(32)};
  `}
`
