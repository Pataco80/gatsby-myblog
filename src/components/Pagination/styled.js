import styled from 'styled-components'
import { setFlex, setPxToRem, setBorder } from '../../styles/helpers'
import media from 'styled-media-query'

// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const PaginationWrapper = styled.div`
  ${setFlex({x:'space-around', y:'center'})};
  color:var(--texts);
  height:${setPxToRem(48)};

  ${media.greaterThan('medium')`
    height:${setPxToRem(64)};
  `}

  body#grid & {
    border-top:${setBorder({size:1, type:'solid',color:`var(--borders)`})};
  }
`
export const PaginationLink = styled(Link)`
  ${setFlex({y:'center'})};
  height:${setPxToRem(38)};
  color:var(--texts);
  text-decoration:none;

  &:hover {
    color:var(--highlight);
  }

`

export const PaginationLinkIcon = styled.span`
  display:inline-block;
  width:${setPxToRem(30)};
  margin:0 ${setPxToRem(8)};
`