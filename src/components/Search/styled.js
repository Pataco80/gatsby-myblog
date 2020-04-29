import styled from "styled-components"
import { setFlex, setColor, setPxToRem, setBorder, setTransition } from '../../styles/helpers'

// Component Styles
// Styles spcifiques à Alglia. voir la documentation
export const SearchWrapper = styled.section`
  background: var(--background);
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
    color: var(--texts);
  }

  .ais-SearchBox-input {
    ${setFlex()};
    background: none;
    border: none;
    border-bottom: ${setBorder({size:1, type:'solid', color:'var(--highlight)'})};
    color: var(--texts);
    font-size: ${setPxToRem(26)};
    padding: ${setPxToRem(12)};
    width: 100%;
    outline:none;

    &::placeholder {
      color: var(--texts);
    }
    &:focus {
      border:${setBorder({size:2,type:'solid',color:'var(--highlight)'})};
      box-shadow: inset 3px 3px 10px 0px var(--highlight);;
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  /* Styles pour les résultats de recherche dans le composant Hit */
  .ais-Hits-list {
    margin-bottom:0;
    padding:0;
    list-style:none;
  }
`