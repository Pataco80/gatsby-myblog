import styled  from 'styled-components'
import { setPxToRem } from '../../styles/helpers'

// Import Components for App
import Img from 'gatsby-image'

// Styles exports
export const AvatarImage = styled(Img)`
border-radius:50%;
width:${setPxToRem(60)};
height:${setPxToRem(60)};
margin:auto;
`
