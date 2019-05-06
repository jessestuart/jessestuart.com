import 'react-image-lightbox/style.css'

import { Link } from 'gatsby'
import Img from 'gatsby-image'
import _ from 'lodash'
import { DateTime } from 'luxon'
import React, { Component } from 'react'
import { Maximize2 } from 'react-feather'
import Lightbox from 'react-image-lightbox'
import styled from 'styled-components'

import StyledPanel from 'components/StyledPanel/StyledPanel'
import md5 from 'md5'
import colors from 'utils/colors'

import {
  ImageZoomGrid,
  ImageZoomGridElement,
  PhotographySectionHeader,
} from '.'

interface Props {
  datetime: DateTime
  images: any[]
  isPreview?: boolean
  slug?: string
}

interface State {
  index: number
  isLightboxOpen: boolean
  lightboxImages: string[]
  lightboxSrc?: string
  nextImageSrc?: string
  prevImageSrc?: string
}

interface ToggleLightboxOptions {
  index: number
  isLightboxOpen: boolean
  lightboxImages?: string[]
}

const MaximizeLink = styled(Link)`
  bottom: 0;
  color: ${colors.accent};
  cursor: pointer;
  position: absolute;
  right: 0;
  transition: all 0.5s;
  &:hover {
    color: ${colors.primary.main} !important;
  }
`

class PhotographyGridSection extends Component<Props, State> {
  public readonly state: State = {
    index: 0,
    isLightboxOpen: false,
    lightboxImages: [],
  }

  public render() {
    const { datetime, images, isPreview, slug = '/#' } = this.props
    const {
      index,
      isLightboxOpen,
      lightboxSrc,
      nextImageSrc,
      prevImageSrc,
    } = this.state

    const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
    const lightboxImages = _.map(
      sortedImages,
      'childrenFile[0].childImageSharp.largeSizes.src',
    )

    if (_.isEmpty(images) || _.isEmpty(lightboxImages)) {
      return null
    }

    const shouldShowMaximizeLink = isPreview && _.size(sortedImages) >= 6

    return (
      <StyledPanel>
        <PhotographySectionHeader datetime={datetime} href={slug} />
        <ImageZoomGrid>
          {sortedImages.map((image: any, imageIndex: number) => {
            const thumbnailSizes = _.get(
              image,
              'childrenFile[0].childImageSharp.thumbnailSizes',
            )

            if (_.isEmpty(thumbnailSizes)) {
              return null
            }

            const { aspectRatio, src } = thumbnailSizes

            return (
              <ImageZoomGridElement
                key={md5(src)}
                onClick={() =>
                  this.toggleLightbox({
                    index: imageIndex,
                    isLightboxOpen: !isLightboxOpen,
                    lightboxImages,
                  })
                }
                aspectRatio={aspectRatio}
              >
                <Img fluid={thumbnailSizes} className="pointer" />
              </ImageZoomGridElement>
            )
          })}
          {shouldShowMaximizeLink && (
            <MaximizeLink to={slug}>
              <Maximize2 size={32} />
            </MaximizeLink>
          )}
        </ImageZoomGrid>
        {isLightboxOpen && lightboxSrc && (
          <Lightbox
            enableZoom={false}
            mainSrc={lightboxSrc}
            nextSrc={nextImageSrc}
            prevSrc={prevImageSrc}
            onCloseRequest={() => this.setState({ isLightboxOpen: false })}
            onMovePrevRequest={() =>
              this.toggleLightbox({ index: index - 1, isLightboxOpen: true })
            }
            onMoveNextRequest={() =>
              this.toggleLightbox({ index: index + 1, isLightboxOpen: true })
            }
          />
        )}
      </StyledPanel>
    )
  }

  private toggleLightbox({
    index,
    isLightboxOpen,
    lightboxImages = this.state.lightboxImages,
  }: ToggleLightboxOptions) {
    // prettier-ignore
    this.setState({ // lgtm [js/react/inconsistent-state-update]
      index,
      isLightboxOpen,
      lightboxImages,
      lightboxSrc: lightboxImages[index],
      nextImageSrc: lightboxImages[(index + 1) % lightboxImages.length],
      prevImageSrc: lightboxImages[(index - 1) % lightboxImages.length],
    })
  }
}

export default PhotographyGridSection
