import styled from 'styled-components'
import { setColor, setFlex, setBorder, setPxToRem } from '../../styles/helpers'

// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const MenuBarWrapper = styled.section`
${setFlex({flDir:'column', x:'space-between', y:'center'})};
position:fixed;
right:0;
height:100vh;
width:${setPxToRem(60)};
background-color:${setColor.lightBlack};
border-left:${setBorder({size:1, type:'solid', color:setColor.primaryColor})};
padding: ${setPxToRem(14)};
`

export const MenuBarGroup = styled.div`
${setFlex({flDir:'column'})};
`

export const MenuBarLink = styled(Link)`
display:block;
width:${setPxToRem(28)};
`

export const MenuBarItem = styled.span`
display:block;
width:${setPxToRem(28)};
cursor:pointer;
color:${setColor.primaryColor};
padding:${setPxToRem(8)} 0;
&:hover {
    color:${setColor.accentColor};
  }
`