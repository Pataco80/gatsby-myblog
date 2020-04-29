import styled from 'styled-components'
import { setPerCent, setPxToRem ,setFlex } from '../../../styles/helpers'

// Styles exports
export const LayoutWrapper = styled.section`
background-color: var(--background);
${setFlex};
`

export const MainWrapper = styled.main`
color: var(--texts);
min-height:100vh;
padding:${setPxToRem(0)} ${setPxToRem(60)} ${setPxToRem(0)} ${setPxToRem(260)};
width:${setPerCent()};
`
