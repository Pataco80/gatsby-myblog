import styled from 'styled-components'
import { setFlex, setColor, setPxToRem } from '../../styles/helpers'

// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const PaginationWrapper = styled.div`
${setFlex({x:'space-around', y:'center'})};
color:${setColor.primaryColor};
`
export const PaginationLink = styled(Link)`
${setFlex({y:'center'})};
height:${setPxToRem(38)};
color:${setColor.primaryColor};
text-decoration:none;

&:hover {
  color:${setColor.accentColor};
}
`

export const PaginationLinkIcon = styled.span`
display:inline-block;
width:${setPxToRem(30)};
margin:0 ${setPxToRem(8)};
`