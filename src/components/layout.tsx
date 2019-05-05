import 'js-tachyons'
import 'typeface-alegreya'
import 'typeface-alegreya-sans'
import 'typeface-lato'
import 'typeface-spectral'

import 'styles/base.css'

import _ from 'lodash'
import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'

import { SiteFooter, SiteHeader } from 'components'

import config from '../../gatsby-config'

const title: string = _.get(config, 'siteMetadata.title')
const url: string = _.get(config, 'siteMetadata.url')

const viewportContent =
  'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'

const HELMET_META = [
  { content: viewportContent, name: 'viewport' },
  { itemProp: 'name', content: title },
  { name: 'description', content: 'jesses.io' },
  { name: 'twitter:title', content: title },
  { property: 'og:title', content: title },
  { property: 'og:url', content: url },
]

interface Props {
  children: ReactNode
  location: {
    pathname: string
  }
}

const Layout = ({ children, location }: Props) => {
  return (
    <>
      <Helmet title={title} meta={HELMET_META} />
      <SiteHeader location={location} />
      <main className="flex flex-auto">{children}</main>
      <SiteFooter />
    </>
  )
}

export default Layout
