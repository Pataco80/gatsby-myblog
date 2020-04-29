import { createGlobalStyle } from 'styled-components'
import 'sanitize.css'
import { setTheme } from './helpers'

const {dark,light} = setTheme

const GlobalStyle = createGlobalStyle`
body.dark {
    --borders: ${dark.borders};
    --texts: ${dark.texts};
    --postColor: ${dark.postColor};
    --highlight: ${dark.highlight};
    --mediumBackground: ${dark.mediumBackground};
    --background: ${dark.background};
    --white: ${dark.white};
    --black: ${dark.black};
  }
  body.light {
    --borders: ${light.borders};
    --texts: ${light.texts};
    --postColor: ${light.postColor};
    --highlight: ${light.highlight};
    --mediumBackground: ${light.mediumBackground};
    --background: ${light.background};
    --white: ${light.white};
    --black: ${light.black};
  }


`

export default GlobalStyle
