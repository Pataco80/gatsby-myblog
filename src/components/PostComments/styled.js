import styled from 'styled-components'
import { layout, setPxToRem } from '../../styles/helpers'
import media from 'styled-media-query'

// Import Components for App


// Component Styles
export const CommentsWrapper = styled.section`
  margin: auto;
  ${layout(1120)};
  padding: ${setPxToRem(46)} ${setPxToRem(102)} ${setPxToRem(46)};

  iframe[src*="ads-iframe"] {
    display: none;
  }
  #disqus_thread {
    a {
      color: var(--highlight) !important;
    }    
  }

  ${media.greaterThan('medium')`

  `}

`

export const CommentsTitle = styled.h2`
  color:var(--postColor) ;
  font-size:${setPxToRem(34)};
  font-weight: 700;
  padding-bottom: ${setPxToRem(32)};
`