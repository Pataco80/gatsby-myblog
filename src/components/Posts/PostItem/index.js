import React from 'react'
import PropTypes from 'prop-types'

// Import Components for App


// Import Styles
import getThemeColor from '../../../utils/getThemeColor'
import * as S from './styled'

// Component
const PostItem = ({ slug, category, background, date, timeToRead, title, description }) => (

  // Render Component
  <S.PostItemWrapper>
<S.PostItemItem to={slug} cover direction='right' duration={0.6} bg={getThemeColor()}>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>Posté le date : {date} - Temps de lecture : {timeToRead} min.</S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemItem>
  </S.PostItemWrapper>
    

)

// React PropTypes and more...
PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  background: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PostItem
