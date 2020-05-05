import styled from 'styled-components'
import {setFlex, setPxToRem,setTransition} from '../../styles/helpers'

export const SocialLinksWrapper = styled.div`
  width:100%;
`

export const SocialLinksList = styled.ul`
  ${setFlex({flDir:'row',x:'space-around',y:'center'})};
  list-style:none;
`
export const SocialLinksItem = styled.li`

`

export const SocialLinksLink = styled.a`
  color:var(--texts);
  text-decoration:none;
  ${setTransition()};

  &:hover {
    color:var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill:#bbb;
  width:${setPxToRem(30)};
  height:${setPxToRem(30)};
  margin: 0 ${setPxToRem(8)};
`