import styled from 'styled-components'
import { setFlex, setPxToRem } from '../../styles/helpers'
import media from 'styled-media-query'

// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const PaginationWrapper = styled.div`
  ${setFlex({x:'space-around', y:'center'})};
  color:var(--texts);
`
export const PaginationLink = styled(Link)`
  ${setFlex({y:'center'})};
  height:${setPxToRem(38)};
  color:var(--texts);
  text-decoration:none;

  &:hover {
    color:var(--highlight);
  }

  ${media.greaterThan('medium')`

  `}

`

export const PaginationLinkIcon = styled.span`
  display:inline-block;
  width:${setPxToRem(30)};
  margin:0 ${setPxToRem(8)};
`