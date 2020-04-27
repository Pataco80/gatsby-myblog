import React from 'react'

// Import Components for App
import ReactDisqusComments from 'react-disqus-comments'
import propTypes from 'prop-types'

// Import Styles
import * as S from './styled'

// Component
const PostComments = ({url, title}) => {
  // Disqus Variables
  const completeUrl = `https://gatsby-myblog.netlify.app/${url}`


  // Render Component
  return(
    <S.CommentsWrapper>
      <S.CommentsTitle>Commentaires</S.CommentsTitle>
      <ReactDisqusComments
      shortname="mon-blog-gatsby"
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
