import styled from 'styled-components'
import { setFlex, setPxToRem, setBorder, setTransition } from '../../../styles/helpers'
import media from 'styled-media-query'

// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const PaginationPostWrapper = styled.section`
  border-bottom: ${setBorder({ size:1})};
  border-top: ${setBorder({ size:1})};
  background: var(--mediumBackground);
  ${setFlex()};
  align-items:stretch;

  ${media.greaterThan('medium')`

  `}

`

export const PaginationPostLink = styled(Link)`
  background: var(--mediumBackground);
  color: var(--highlight);
  ${setFlex({y:'center'})};
  padding: 0 ${setPxToRem(8)};
  text-decoration: none;
  width: 50%;
  min-height:${setPxToRem(70)};
  ${setTransition()};
  position:relative;
  align-self:font-stretch;

  &:hover {
    background: var(--borders);
  }

  &.previous {
    border-right: ${setBorder({ size:1})};
    padding-left: ${setPxToRem(48)};

    span {
      left:${setPxToRem(8)};
    }
    ${media.greaterThan('medium')`
    padding-left: ${setPxToRem(64)};
  `}
  }

  &.next {
    ${setFlex({x:'flex-end', y:'center'})};
    padding-right: ${setPxToRem(48)};
    span {
      right:8px;
    }
${media.greaterThan('medium')`
    padding-right: ${setPxToRem(64)};

  `}
  }

  ${media.greaterThan('medium')`
    padding: ${setPxToRem(48)};
  `}
`
export const PaginationLinkIcon = styled.span`
display:block;
position:absolute;
width:${setPxToRem(20)};
margin: 0 ${setPxToRem(8)};

${media.greaterThan('medium')`
width:${setPxToRem(32)};

  `}
`