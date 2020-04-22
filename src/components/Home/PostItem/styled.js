import styled from 'styled-components';
import { setColor, setPxToRem, setFlex, setBorder } from '../../../styles/helpers'
// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const PostItemWrapper = styled.article`
background-color:${setColor.mainBlack};
border-bottom:${setBorder({size:2,style:'solid',color: setColor.primaryColor})};
`

export const PostItemItem = styled(Link)`
${setFlex({y:'center'})};
color:${setColor.primaryColor};
text-decoration:none;
padding:${setPxToRem(24)} ${setPxToRem(32)};

&:hover {
  color:${setColor.accentColor};
}
`

export const PostItemTag = styled.div`
${setFlex({x:'center', y:'center'})};
min-width:${setPxToRem(90)};
min-height:${setPxToRem(90)};
font-size:${setPxToRem(20)};
text-transform:uppercase;
font-weight:300;
color:${setColor.mainWhite};
background-color: ${props => props.background? props.background : setColor.lightGrey};
border-radius:50%;
`

export const PostItemInfo = styled.div`
${setFlex({flDir:'column'})};
margin-left:${setPxToRem(24)};
`

export const PostItemDate = styled.time`
font-size:${setPxToRem(14)};
`

export const PostItemTitle = styled.h1`
font-size:${setPxToRem(26)};
font-weight:700;
text-decoration:underline;
margin: ${setPxToRem(3)} 0 ${setPxToRem(12)};
`

export const PostItemDescription = styled.p`
font-size:${setPxToRem(18)};
font-weight:300;
line-height:${setPxToRem(24)};
margin:0;
`