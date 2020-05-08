import styled from 'styled-components'
import { setPxToRem } from '../../styles/helpers'
import media from 'styled-media-query'

export const PostItemsLayout = styled.section`
body#grid & {
  display:grid;
  grid-area:posts;
  grid-template-columns: repeat(auto-fit, minmax(${setPxToRem(300)}, 1fr));
  background-color:var(--background);

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fit, minmax(${setPxToRem(260)}, 1fr));
  `}

  ${media.greaterThan('large')`
  grid-template-columns: repeat(auto-fit, minmax(${setPxToRem(300)}, 1fr));
  `}
}
`