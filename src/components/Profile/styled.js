import styled from 'styled-components'
import { setTransition, setFlex, setColor, setPxToRem } from '../../styles/helpers'

// Import Components for App
import { Link } from 'gatsby'

// Styles exports
export const ProfileWrapper = styled.section`
  ${setFlex({x:'center',y:'center', flDir:'column'})};
  color:${setColor.mainWhite};
`

export const ProfileLink = styled(Link)`
  color:${setColor.primaryColor};
  text-decoration:none;
  ${setTransition()};

  &:hover {
    color:${setColor.accentColor};
  }
`

export const ProfileAuthor = styled.h1`
  font-size:${setPxToRem(26)};
  margin:${setPxToRem(8)} ${setPxToRem('auto')} ${setPxToRem(24)};
`

export const ProfileMyJob = styled.small`
  display:block;
  font-size:${setPxToRem(18)};
  font-weight:300;
`

export const ProfileDescription = styled.p`
  font-size:${setPxToRem(16)};
  font-weight:300;
  line-height:${setPxToRem(22)};
`