import styled from 'styled-components'

export default styled.div`
  position: relative;
  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: minmax(20vh, auto);
  @media (min-width: 60em) {
    grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  }
  @media (max-width: 60em) and (min-width: 45em) {
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  }
  @media (max-width: 45em) {
    grid-template-columns: repeat(auto-fill, minmax(50vw, 1fr));
  }
`
