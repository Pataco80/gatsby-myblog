import { css } from "styled-components"
import { rgba } from "polished"

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
}

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;",
}

const sizes = {
  large: 1200,
  desktop: 1024,
  tablet: 768,
  phone: 576,
}
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display: flex;
  justify-content: ${x};
  align-items: ${y};`
}

export const setLinearBcg = ({
  colStart = "rgba(0, 0, 0, 0)",
  colEnd = "rgba(0, 0, 0, 0)",
} = {}) => {
  return `background: linear-gradient(${colStart}, ${colEnd});
    opacity: 1 !important;
`
}

export const setImgBcg = ({
  size = "cover",
  position = "center",
  repeat = "no-repeat",
} = {}) => {
  return `background-size: ${size} !important;
  background-position: ${position} !important;background-repeat: ${repeat} !important;
`
}

export const setRem = (number = 16) => {
  return `${number / 16}rem`
}

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`
}

export const setBorder = ({
  size = 2,
  type = "solid",
  color = "black",
} = {}) => {
  return `border:${setRem(size)} ${type} ${color}`
}

export const setTransition = ({
  type = "all",
  duration = 0.3,
  effect = "ease-in-out",
} = {}) => {
  return `transition: ${type} ${duration}s ${effect}`
}

export const setShadow = {
  light: "box-shadow 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow 6px 6px 5px 0px rgba(0,0,0,0.75)",
  darkest: "box-shadow 10px 10px 5px 0px rgba(0,0,0,0.75)",
}
