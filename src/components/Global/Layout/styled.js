import styled from 'styled-components'
import { setColor, setPerCent, setPxToRem ,setFlex } from '../../../styles/helpers'

// Styles exports
export const LayoutWrapper = styled.section`
background-color:${setColor.mainBlack};
${setFlex};
`

export const MainWrapper = styled.main`
color: ${setColor.mainWhite};
min-height:100vh;
padding:${setPxToRem(0)} ${setPxToRem(60)} ${setPxToRem(0)} ${setPxToRem(320)};
width:${setPerCent()};
`
