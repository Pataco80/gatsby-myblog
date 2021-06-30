import React from "react"

// Import Components for App
import ReactDisqusComments from "react-disqus-comments"
import propTypes from "prop-types"

// Import Styles
import * as S from "./styled"

// Component
const PostComments = ({ url, title }) => {
  // Disqus Variables
  const completeUrl = `https://gatsby-myblog.netlify.app/${url}`

  // Render Component
  return (
    // shortname est indiqué dans votre admin disqus. Généralement, identique au nom que vous donnés à votre application.
    // L'url est celle du site plus la props provenant du slug du post fournie par la requuête graphQl
    <S.CommentsWrapper>
      <S.CommentsTitle>Commentaires</S.CommentsTitle>
      <ReactDisqusComments
        shortname="mon-blog-gatsby"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.CommentsWrapper>
  )
}

// React PropTypes and more...
PostComments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}

export default PostComments
