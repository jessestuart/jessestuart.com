import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

const StyledImageZoomGridElement = styled(Box)`
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  grid-column-start: auto;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  // Throw in some drop shadow to make it pretty (extra on hover) — and just a
  // smidge of border radius, too:
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.75));
  &:hover {
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.9));
  }
`

export default StyledImageZoomGridElement
