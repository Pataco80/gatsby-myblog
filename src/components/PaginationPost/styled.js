import styled from 'styled-components'
import { setFlex, setColor, setPxToRem, setBorder, setTransition } from '../../styles/helpers'

// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const PaginationPostWrapper = styled.section`
  border-bottom: ${setBorder({ size:1})};
  border-top: ${setBorder({ size:1})};
  background: var(--mediumBackground);
  ${setFlex()};
`

export const PaginationPostLink = styled(Link)`
  background: var(--mediumBackground);
  color: var(--highlight);
  ${setFlex({y:'center'})};
  align-self:stretch;
  padding: ${setPxToRem(48)};
  text-decoration: none;
  width: 50%;
  ${setTransition()};

  &:hover {
    background: var(--borders);
  }

  &.previous {
    border-right: ${setBorder({ size:1})};
  }

  &.next {
      ${setFlex({x:'flex-end', y:'center'})};

  }
`
export const PaginationLinkIcon = styled.span`
display:block;
width:${setPxToRem(30)};
margin:0 ${setPxToRem(8)};
`