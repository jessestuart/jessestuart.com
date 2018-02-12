import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Calendar } from 'react-feather'

import StyledLink from '../StyledLink/StyledLink'

const BlogHeader = ({ date, slug, title }) => {
  return (
    <Fragment>
      <h2 className="alegreya-sans f2 fw5 header-primary mb2 mt4">
        <Link to={slug}>
          <StyledLink>{title}</StyledLink>
        </Link>
      </h2>
      <p className="f6 mv2 flex items-center">
        <Calendar className="header-primary mr2" style={{ maxWidth: '15px' }} />
        {date}
      </p>
    </Fragment>
  )
}

BlogHeader.propTypes = {
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default BlogHeader
