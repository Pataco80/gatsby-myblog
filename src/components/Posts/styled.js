import styled from 'styled-components'
import { setPxToRem } from '../../styles/helpers'
import media from 'styled-media-query'

export const PostItemsLayout = styled.section`
body#grid & {
  display:grid;
  grid-area:posts;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color:var(--backgrounde);

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  `}

  ${media.greaterThan('large')`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
}
`