import styled from "styled-components"
import { setFlex, setColor, setPxToRem, setBorder, setTransition } from '../../../styles/helpers'

export const SearchWrapper = styled.section`
  background: ${setColor.mainBlack};
  ${setFlex({flDir:'column',y:'stretch'})};
  width: 100%;
  ${setTransition({type:'opacity', duration:0.4})};

  .ais-InstantSearch__root {
    ${setFlex({flDir:'column', y:'stretch'})};
    height: auto;
  }

  .ais-SearchBox,
  .ais-Stats {
    padding: ${setPxToRem(8)} ${setPxToRem(48)};
  }

  .ais-SearchBox {
    padding-top: ${setPxToRem(96)};
  }

  .ais-SearchBox-form {
    width: 100%;
  }

  .ais-Stats {
    color: ${setColor.primaryColor};
  }

  .ais-SearchBox-input {
    ${setFlex()};
    background: none;
    border: none;
    border-bottom: ${setBorder({size:1, type:'solid', color:setColor.darkGrey})};
    color: ${setColor.primaryColor};
    font-size: ${setPxToRem(26)};
    padding: ${setPxToRem(12)};
    width: 100%;
    outline:none;

    &::placeholder {
      color: ${setColor.primaryColor};
    }
    &:focus {
      border:${setBorder({size:2,type:'solid',color:setColor.accentColor})};
      box-shadow: inset 3px 3px 10px 0px ${setColor.accentColor};
}





  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`