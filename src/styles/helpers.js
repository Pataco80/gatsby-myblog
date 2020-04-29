import { css } from 'styled-components'
//import { rgba } from 'polished'

// Colors Palette
export const setColor = {
  primaryColor: '#8899a6',
  accentColor: '#1fa1f2',
  mainWhite: '#fff',
  secondaryWhite: '#f0f0f3',
  mainBlack: '#222',
  secondaryBlack: '#111',
  mainAntracit: '#192734',
  darkAtracit: '#16202c',
  darkGrey: '#38444d',
  mainGrey: '#555555',
  lightGrey: '#dedede',
}

export const setTheme = {
  dark : {
    texts: setColor.primaryColor,
    highlight: setColor.accentColor,
    postColor: setColor.mainWhite,
    background: setColor.darkAtracit,
    mediumBackground: setColor.mainAntracit,
    borders: setColor.darkGrey,
    white: setColor.mainWhite,
    black: setColor.mainBlack
  },
  light : {
    texts: setColor.mainGrey,
    highlight: setColor.accentColor,
    postColor: setColor.secondaryBlack,
    background: setColor.mainWhite,
    mediumBackground: setColor.secondaryWhite,
    borders: setColor.lightGrey,
    white: setColor.mainWhite,
    black: setColor.mainBlack
  }
}


// Fonts Palette
export const setFont = {
  main: 'font-family: "Lato", sans-serif;',
  slanted: 'font-family: "Courgette", cursive;',
}

// Media Queries Functions
const sizes = {
  large: 1200,
  desktop: 1024,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

// Unitie's Calc Functions
export const setPxToRem = (px = 16) => {
  return `${px / 16}rem`
}
export const setPerCent = (pc = 100) => {
  return `${(100 * pc) / 100}%`
}

// Layout's Functions
export const layout = (px = 1170) => {
  return `
    max-width:${setPxToRem(px)};
    width:100%;
    margin: 0 auto;
    padding: 0 ${setPxToRem(8)};`
}

/*
export const layout = ({unity}) => {
  if(unity === {setPxToRem()}){
    return`max-width:${layout(setPxToRem())};
    width:100%;
    margin: 0 auto;
    padding: 0 ${setPxToRem(8)};`
  } else if(unity === setPerCent())
    return `
    max-width:${layout(setPerCent())};
    width:100%;
    margin: 0 auto;
    padding: 0 ${setPxToRem(8)};`
}
*/

export const setFlex = ({ x = 'flex-start', y = 'flex-start', flDir = 'row'} = {}) => {
  return `display: flex;
  justify-content: ${x};
  align-items: ${y};
  flex-direction: ${flDir};
  `
}

// Images and Background's Functions
export const setLinearBcg = ({
  colStart = 'rgba(0, 0, 0, 0)',
  colEnd = 'rgba(0, 0, 0, 0)',
} = {}) => {
  return `background: linear-gradient(${colStart}, ${colEnd});
    opacity: 1 !important;
`
}

export const setImgBcg = ({
  size = 'cover',
  position = 'center',
  repeat = 'no-repeat',
} = {}) => {
  return `background-size: ${size} !important;
  background-position: ${position} !important;background-repeat: ${repeat} !important;
`
}

// Effect's Functions or props Object's
export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`
}

export const setBorder = ({
  size = 2,
  type = 'solid',
  color = 'var(--borders)',
} = {}) => {
  return `${setPxToRem(size)} ${type} ${color}`
}

export const setTransition = ({
  style = 'all',
  duration = 0.5,
  effect = 'ease-in-out',
} = {}) => {
  return `transition: ${style} ${duration}s ${effect}`
}

export const setShadow = {
  light: 'box-shadow 3px 3px 5px 0px rgba(0,0,0,0.75)',
  dark: 'box-shadow 6px 6px 5px 0px rgba(0,0,0,0.75)',
  darkest: 'box-shadow 10px 10px 5px 0px rgba(0,0,0,0.75)',
}
