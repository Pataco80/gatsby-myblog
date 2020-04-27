import React from 'react'

// Import Components for App
import ReactDisqusComments from 'react-disqus-comments'
import propTypes from 'prop-types'

// Import Styles
import * as S from './styled'

// Component
const PostComments = ({url, title}) => {
  // Disqus Variables
  const completeUrl = `http://dvwdesign.ch/mon-blog/${url}`


  // Render Component
  return(
    <S.CommentsWrapper>
      <S.CommentsTitle>{title}</S.CommentsTitle>
      <ReactDisqusComments
      shortname="Pataco80"
      identifier={completeUrl}
      title={title}
      url={completeUrl}/>
    </S.CommentsWrapper>
  )
}

// React PropTypes and more...
PostComments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}

export default PostComments
