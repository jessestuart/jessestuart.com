import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Headroom from 'react-headroom'

import HeaderLink from './HeaderLink'

import '../../styles/base.css'

interface Props {
  className: string
  location: {
    pathname: string
  }
}

class SiteHeader extends Component<Props> {
  public render() {
    const pathname = _.get(this, 'props.location.pathname', '/')
    const isRoot = _.isNil(pathname) || pathname === '/'

    return (
      <Headroom
        style={{
          MozTransition: 'all 0.7s ease-in-out',
          OTransaction: 'all 0.7s ease-in-out',
          Transition: 'all 0.7s ease-in-out',
          WebkitTranstion: 'all 0.7s ease-in-out',
        }}
      >
        <header
          className={`bb b--hot-pink center site-header flex ${
            !isRoot ? 'bw1' : ''
          }`}
          style={{ background: '#282C34' }}
        >
          <div className="w-35-ns flex flex-row center source-sans fw3">
            <HeaderLink className="br b--mid-gray" href={'/'} isActive={isRoot}>
              home
            </HeaderLink>
            <HeaderLink
              className="br b--mid-gray"
              href={'/posts'}
              isActive={pathname.startsWith('/posts')}
            >
              words
            </HeaderLink>
            <HeaderLink
              className="br b--mid-gray"
              href={'/photography'}
              isActive={pathname.startsWith('/photography')}
            >
              pictures
            </HeaderLink>
            <HeaderLink
              href={'/about'}
              isActive={pathname.startsWith('/about')}
            >
              about
            </HeaderLink>
          </div>
        </header>
      </Headroom>
    )
  }
}

export default SiteHeader
