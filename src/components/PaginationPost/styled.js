import styled from 'styled-components'
import { setFlex, setColor, setPxToRem, setBorder, setTransition } from '../../styles/helpers'

// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const PaginationPostWrapper = styled.section`
  border-bottom: ${setBorder({ size:1, color:setColor.darkGrey })};
  border-top: ${setBorder({ size:1, color:setColor.darkGrey })};
  background: ${setColor.lightBlack};
  ${setFlex()};
`

export const PaginationPostLink = styled(Link)`
  background: ${setColor.lightBlack};
  color: ${setColor.primaryColor};
  ${setFlex({y:'center'})};
  padding: ${setPxToRem(48)};
  text-decoration: none;
  width: 50%;
  ${setTransition()};

  &:hover {
    color: ${setColor.accentColor};
    background: ${setColor.darkGrey};
  }

  &.previous {
    border-right: ${setBorder({ size:1, color:setColor.darkGrey })};
  }

  &.next {
      ${setFlex({x:'flex-end', y:'center'})};

  }
`
export const PaginationLinkIcon = styled.span`
display:inline-block;
width:${setPxToRem(30)};
margin:0 ${setPxToRem(8)};
`