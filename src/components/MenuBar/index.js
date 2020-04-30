import React, {useState, useEffect} from 'react'

// Import Components for App
import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { Lightbulb as Light } from '@styled-icons/fa-regular/Lightbulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-solid/UpArrowAlt'

// Import Styles
import * as S from './styled'

// Component
const MenuBar = () => {
  const isDarkTheme = theme === 'dark'

  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = setTheme(window.__theme)
  }, [])

  // Render Component
  return(
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to='/' title="Aller à la page d'Acceuil">
          <S.MenuBarItem>
            <Home/>
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to='/search/' title='Rechercher'>
          <S.MenuBarItem>
            <Search/>
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title='Theme Light / Dark' onClick={() => {
            window.__setPreferredTheme(isDarkTheme ? 'light' : 'dark')
          }}
          className={theme}>
          <Light/>
        </S.MenuBarItem>
        <S.MenuBarItem title='Affichage Liste ou Grille'>
          <Grid/>
        </S.MenuBarItem>
        <S.MenuBarItem title='Aller en haut'>
          <Arrow/>
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}


export default MenuBar
