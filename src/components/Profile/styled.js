import styled from 'styled-components'
import { setTransition, setFlex, setPxToRem } from '../../styles/helpers'
import media from 'styled-media-query'

// Import Components for App
import { Link } from 'gatsby'

// Styles exports
export const ProfileWrapper = styled.section`
  ${setFlex({y:'center'})};
  color:var(--texts);
  
  ${media.greaterThan('medium')`
  ${setFlex({x:'center',y:'center', flDir:'column'})};
  `}
`

export const ProfileLink = styled(Link)`
  color:var(--texts);
  text-decoration:none;
  ${setTransition()};

  &:hover {
    color:var(--highlight);
  }
`

export const ProfileAuthor = styled.h1`
  font-size:${setPxToRem(18)};
  margin:0;
  line-height:1.25;
  text-align:left;

  ${media.greaterThan('medium')`
  text-align:center;
  font-size:${setPxToRem(20)};
  margin:${setPxToRem(8)} auto ${setPxToRem(24)};
  line-height:1.5;

    span {
      display:block;
    }
  `}

  ${media.greaterThan('medium')`
  font-size:${setPxToRem(26)};
  margin:${setPxToRem(8)} ${setPxToRem('auto')} ${setPxToRem(24)};
  `}
`

export const ProfileMyJob = styled.small`
  display:block;
  font-size:${setPxToRem(18)};
  font-weight:300;
`

export const ProfileDescription = styled.p`
  display:none;
  font-size:${setPxToRem(16)};
  font-weight:300;
  line-height:${setPxToRem(22)};
  ${media.greaterThan('medium')`
    display:block;
  `}

`