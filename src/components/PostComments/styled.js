import styled from 'styled-components'
import { layout, setColor, setPxToRem } from '../../styles/helpers'

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
      color: ${setColor.accentColor} !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color:${setColor.mainWhite};
  font-size:${setPxToRem(34)};
  font-weight: 700;
  padding-bottom: ${setPxToRem(32)};
`