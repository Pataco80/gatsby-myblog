import React from 'react'
import propTypes from 'prop-types'

// Import Components for App
import { LeftArrowCircle as Left } from '@styled-icons/boxicons-regular/LeftArrowCircle'
import { RightArrowCircle as Right } from '@styled-icons/boxicons-regular/RightArrowCircle'


// Import Styles
import * as S from './styled'

// Component
const PaginationPost = ({ previous, next }) => (

  // Render Component
  <S.PaginationPostWrapper>
    {previous && (
      <S.PaginationPostLink to={previous.fields.slug} className="previous">
        <S.PaginationLinkIcon>
          <Left />
        </S.PaginationLinkIcon>
        {previous.frontmatter.title}
      </S.PaginationPostLink>
    )}
    {next && (
      <S.PaginationPostLink to={next.fields.slug}  className="next">
        {next.frontmatter.title}
        <S.PaginationLinkIcon>
          <Right />
        </S.PaginationLinkIcon>
      </S.PaginationPostLink>
    )}
  </S.PaginationPostWrapper>
)

// React PropTypes and more...
PaginationPost.propTypes = {
  previous:propTypes.shape({
    fields:propTypes.shape({
      slug:propTypes.string.isRequired
    }),
    frontmatter:propTypes.shape({
      title:propTypes.string.isRequired
    })
  }),
  next:propTypes.shape({
    fields:propTypes.shape({
      slug:propTypes.string.isRequired
    }),
    frontmatter:propTypes.shape({
      title:propTypes.string.isRequired
    })
  })
}

export default PaginationPost
