import styled from 'styled-components'
import {setFlex,setColor, setPxToRem,setTransition} from '../../../styles/helpers'

export const SocialLinksWrapper = styled.nav`
`

export const SocialLinksList = styled.ul`
  ${setFlex({flDir:'row',x:'space-around',y:'center'})};
  list-style:none;
`
export const SocialLinksItem = styled.li`

`

export const SocialLinksLink = styled.a`
  color:${setColor.primaryColor};
  text-decoration:none;
  ${setTransition()};

  &:hover {
    color:${setColor.accentColor};
  }
`

export const IconWrapper = styled.div`
  fill:#bbb;
  width:${setPxToRem(30)};
  height:${setPxToRem(30)};
  margin: 0 ${setPxToRem(8)};
`