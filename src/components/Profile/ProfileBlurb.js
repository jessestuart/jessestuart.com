import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ProfileStyledLink from './ProfileStyledLink'
import ProfileHeading from './ProfileHeading'

import Twemoji from '../Icons/Twemoji'

const BEIGBEDER_URL = 'http://jstu.art/ojVB'
const COLING_URL = 'http://jstu.art/oijk'
const USPO_URL = 'http://jstu.art/oj1g'

const {
  CrescentMoon,
  France,
  Microscope,
  OpenBook,
  PersonalComputer,
  Rat,
  Scroll,
  ThinkingFace,
} = Twemoji

const ProfileBlurb = () => (
  <Fragment>
    <ProfileHeading />
    <SubBlurb Emoji1={PersonalComputer} Emoji2={ThinkingFace}>
      NYC-based software engineer.
    </SubBlurb>
    <SubBlurb Emoji1={OpenBook} Emoji2={Scroll}>
      <span className="db">
        Published{' '}
        <ProfileStyledLink href={COLING_URL}>NLP researcher</ProfileStyledLink>,
        and
      </span>
      <ProfileStyledLink href={USPO_URL}>USPO Patent holder</ProfileStyledLink>.
    </SubBlurb>
    <SubBlurb Emoji1={Microscope} Emoji2={Rat}>
      Neuroscientist by degree.
    </SubBlurb>
    <SubBlurb Emoji1={France} Emoji2={CrescentMoon}>
      <ProfileStyledLink href={BEIGBEDER_URL}>
        French translator
      </ProfileStyledLink>{' '}
      by night.
    </SubBlurb>
  </Fragment>
)

const SubBlurb = ({ Emoji1, Emoji2, children }) => (
  <p className="flex justify-center justify-end-ns items-center">
    <span className="f4 fw3 dib tr lh-copy">{children}</span>
    <span className="f6 dib">
      <Emoji1 className="mh2" style={{ height: '1.25rem', width: '1.25rem' }} />
      <Emoji2 style={{ height: '1.25rem', width: '1.25rem' }} />
    </span>
  </p>
)

SubBlurb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  Emoji1: PropTypes.func.isRequired,
  Emoji2: PropTypes.func.isRequired,
}

export default ProfileBlurb
