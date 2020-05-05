import styled from 'styled-components'
import { setPerCent, setPxToRem ,setFlex } from '../../../styles/helpers'
import media from 'styled-media-query'

// Styles exports
export const LayoutWrapper = styled.section`
background-color: var(--background);
${setFlex};
`

export const MainWrapper = styled.main`
  color: var(--texts);
  min-height:100vh;
  padding:${setPxToRem(55)} ${setPxToRem(0)} ${setPxToRem(47)} ${setPxToRem(0)};
  width:${setPerCent()};

  ${media.greaterThan('medium')`
    padding:${setPxToRem(0)} ${setPxToRem(51)} ${setPxToRem(0)} ${setPxToRem(190)};
  `}
`
