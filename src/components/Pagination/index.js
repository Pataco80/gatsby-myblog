import React from 'react'
import propTypes from 'prop-types'

// Import Components for App
import { LeftArrowCircle as Left } from '@styled-icons/boxicons-regular/LeftArrowCircle'
import { RightArrowCircle as Right } from '@styled-icons/boxicons-regular/RightArrowCircle'


// Import Styles
import getThemeColor from '../../utils/getThemeColor'
import * as S from './styled'

// Component
const Pagination = ({ currentPage, numPages, prevPage, nextPage, isFirst, isLast }) => (


  // Render Component
  <S.PaginationWrapper>
    {!isFirst && 
      <S.PaginationLink to={prevPage} cover direction='left' duration={0.6} bg={getThemeColor()}>
        <S.PaginationLinkIcon>
          <Left />
        </S.PaginationLinkIcon>
        Page Précédente
      </S.PaginationLink>
    }
    {currentPage} sur {numPages}
    {!isLast && 
      <S.PaginationLink to={nextPage} cover direction='right' duration={0.6} bg={getThemeColor()}>
        Page Suivante
        <S.PaginationLinkIcon>
          <Right />
        </S.PaginationLinkIcon>
      </S.PaginationLink>
    }
  </S.PaginationWrapper>
)

// React PropTypes and more...
Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
}

export default Pagination
