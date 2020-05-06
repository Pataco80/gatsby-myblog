import styled from 'styled-components'
import { setPxToRem, setTransition, setLetterSpacing, setBorder, layout } from '../../styles/helpers'
import media from 'styled-media-query'

export const PostHeader = styled.header`
  ${layout(1120)}
  color: var(--postColor);
  margin: auto;
  padding:  ${setPxToRem(24)} ${setPxToRem(16)} 0;

  ${media.greaterThan('medium')`
    padding:  ${setPxToRem(32)} ${setPxToRem(32)} 0;
  `}

  ${media.greaterThan('large')`
    padding: ${setPxToRem(80)} ${setPxToRem(80)} 0;
  `}
`

export const PostTitle = styled.h1`
  font-size: ${setPxToRem(36)};
  font-weight: 700;
  padding: 0 ${setPxToRem(16)};
  margin: ${setPxToRem(16)} auto;

  ${media.greaterThan('medium')`
    font-size: ${setPxToRem(42)};
    padding: 0 ${setPxToRem(18)};
  `}

  ${media.greaterThan('large')`
    font-size: ${setPxToRem(64)};
    padding: 0 ${setPxToRem(22)};
  `}
`

export const PostDescription = styled.h2`
  font-size: ${setPxToRem(24)};
  font-weight: 200;
  padding: 0 ${setPxToRem(16)};

  ${media.greaterThan('medium')`
    font-size: ${setPxToRem(28)};
    padding: 0 ${setPxToRem(18)};
  `}

  ${media.greaterThan('large')`
    font-size: ${setPxToRem(32)};
    padding: 0 ${setPxToRem(18)};
  `}
`

export const PostDate = styled.p`
  font-size: ${setPxToRem(14)};
  font-weight: 100;
  padding: 0 ${setPxToRem(16)};

  ${media.greaterThan('medium')`
    font-size: ${setPxToRem(17)};
    font-weight: 100;
    padding: 0 ${setPxToRem(22)};
  `}
`

export const MainContent = styled.section`
  ${layout(1120)}
  margin: auto;
  padding:  ${setPxToRem(24)} ${setPxToRem(16)} 0;

  ${media.greaterThan('medium')`
    padding:  ${setPxToRem(32)} ${setPxToRem(32)} 0;
  `}

  ${media.greaterThan('large')`
    padding: ${setPxToRem(80)} ${setPxToRem(80)} 0;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-size: ${setPxToRem(20)};
    font-weight: 300;
    line-height: 1.7;
    ${setLetterSpacing(1)};
    padding: 0 ${setPxToRem(16)};

    ${media.greaterThan('medium')`
    padding:  0 ${setPxToRem(22)};
  `}
  }

  p {
    margin: 0 auto ${setPxToRem(26)};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: ${setPxToRem(38)} auto ${setPxToRem(16)};
  }

  ul,
  ol {
    list-style: disc;
    padding-left: ${setPxToRem(40)};
    margin: 0 auto ${setPxToRem(26)};
  }

  li {
    padding: ${setPxToRem(10)} 0;
    line-height:1.2;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: ${setPxToRem(30)} auto;
  }

  iframe {
    padding: 0 ${setPxToRem(26)} ${setPxToRem(26)};
    width: 100%;
  }

  blockquote {
    color: var(--postColor);
    border-left: ${setBorder({size:5, type:'solid', color: 'var(--highlight)'})};
    padding: 0;
    margin: ${setPxToRem(50)} auto ${setPxToRem(50)} ${setPxToRem(16)};

    ${media.greaterThan('medium')`
      padding:  0 ${setPxToRem(12)};
    `}
    ${media.greaterThan('large')`
      padding:  0 ${setPxToRem(16)};
    `}
  }

  hr {
    border: ${setBorder({size:1})};
    margin: ${setPxToRem(48)} auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: ${setPxToRem(20)} auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    ${setLetterSpacing(1.1)};
    line-height: 1.4;
  }

  h1 {
    font-size: ${setPxToRem(32)};
    ${media.greaterThan('medium')`
    font-size: ${setPxToRem(36)};
    `}
    ${media.greaterThan('medium')`
    font-size: ${setPxToRem(42)};
    `}
  }

  h2 {
    font-size: ${setPxToRem(28)};
    ${media.greaterThan('medium')`
    font-size: ${setPxToRem(32)};
    `}
    ${media.greaterThan('medium')`
    font-size: ${setPxToRem(36)};
    `}
  }

  h3 {
    font-size: ${setPxToRem(24)};
    ${media.greaterThan('medium')`
      font-size: ${setPxToRem(28)};
    `}
    ${media.greaterThan('medium')`
      font-size: ${setPxToRem(32)};
    `}
  }

  h4 {
    font-size: ${setPxToRem(22)};
    ${media.greaterThan('medium')`
      font-size: ${setPxToRem(26)};
    `}
    ${media.greaterThan('medium')`
      font-size: ${setPxToRem(30)};
    `}
  }

  h5 {
    font-size: ${setPxToRem(28)};
    ${media.greaterThan('medium')`
      font-size: ${setPxToRem(22)};
    `}
    ${media.greaterThan('medium')`
      font-size: ${setPxToRem(26)};
    `}
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    ${setTransition({type:'opacity', duration: 0.2})};

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 ${setPxToRem(26)} ${setPxToRem(26)};
  }

  .instagram-media {
    margin: ${setPxToRem(16)} auto !important;
  }

  a {
    border-bottom: ${setBorder({size:1, type:'dashed', color:'var(--highlight)'})};
    color: var(--highlight);
    text-decoration: none;
    ${setTransition({type:'opacity', duration: 0.5})};

    svg {
      color: var(--postColor);
    }

    &:hover {
      opacity: 0.8;
    }
  }
`