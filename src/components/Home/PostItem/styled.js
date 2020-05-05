import styled from 'styled-components';
import { setPxToRem, setFlex, setBorder } from '../../../styles/helpers'
import media from 'styled-media-query'

// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const PostItemWrapper = styled.article`
  border-bottom:${setBorder({size:2})};
`

export const PostItemItem = styled(Link)`
  ${setFlex({y:'center'})};
  color:var(--texts);
  text-decoration:none;
  padding:${setPxToRem(16)};

  &:hover {
    color:var(--highlight);
  }

  ${media.greaterThan('medium')`
    padding:${setPxToRem(24)} ${setPxToRem(32)};
  `}
`

export const PostItemTag = styled.div`
  ${setFlex({x:'center', y:'center'})};
  min-width:${setPxToRem(70)};
  min-height:${setPxToRem(70)};
  font-size:${setPxToRem(16)};
  text-transform:uppercase;
  font-weight:300;
  color:var(--white);
  background-color: ${props => props.background? props.background : "var(--highlight)"};
  border-radius:50%;

  ${media.greaterThan('medium')`
    min-width:${setPxToRem(90)};
    min-height:${setPxToRem(90)};
    font-size:${setPxToRem(20)};
  `}
`

export const PostItemInfo = styled.div`
  ${setFlex({flDir:'column'})};
  margin-left:${setPxToRem(16)};

  ${media.greaterThan('medium')`
    margin-left:${setPxToRem(24)};
  `}
`

export const PostItemDate = styled.time`
  font-size:${setPxToRem(14)};
`

export const PostItemTitle = styled.h1`
  font-size:${setPxToRem(22)};
  font-weight:700;
  text-decoration:underline;
  margin: ${setPxToRem(3)} 0 ${setPxToRem(12)};

  ${media.greaterThan('medium')`
    font-size:${setPxToRem(26)};
  `}
`

export const PostItemDescription = styled.p`
  font-size:${setPxToRem(18)};
  font-weight:300;
  line-height:${setPxToRem(24)};
  margin:0;
  display:none;

  ${media.greaterThan('medium')`
    display:block;
  `}
`