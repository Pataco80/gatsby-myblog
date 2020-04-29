import styled from 'styled-components'
import { setFlex, setBorder, setColor, setPxToRem } from '../../styles/helpers'

export const SideBarWrapper = styled.aside`
  ${setFlex({flDir:'column',x:'flex-start',y:'center'})};
  position:fixed;
  height:100vh;
  width:${setPxToRem(260)};
  padding:${setPxToRem(32)};
  background-color:var(--mediumBackground);
  border-right:${setBorder({size:1})};
  text-align:center;
`