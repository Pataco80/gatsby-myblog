import styled from 'styled-components'
import { setFlex, setBorder, setPxToRem } from '../../styles/helpers'

// Import Components for App
import { Link } from 'gatsby'

// Component Styles
export const MenuBarWrapper = styled.section`
${setFlex({flDir:'column', x:'space-between', y:'center'})};
position:fixed;
right:0;
height:100vh;
width:${setPxToRem(60)};
background-color:var(--mediumBackground);
border-left:${setBorder({size:1})};
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
color:var(--texts);
padding:${setPxToRem(8)} 0;
  &:hover {
    color: var(--highlight);
  }
  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }
  
`