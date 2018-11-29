import gray from 'gray-percentage'
import color from 'onecolor'

const PrimaryColors = {
  // Light Primary shades.
  light1: '#ffebee',
  light2: '#ffd7de',
  light3: '#ffc3ce',
  light4: '#ffb0bd',
  light5: '#ff9cad',
  light6: '#ff889d',
  light7: '#ff758c',
  light8: '#ff617c',
  light9: '#ff4d6c',
  // Main primary.
  main: '#FF3A5C',
  // Dark Primary shades --
  // autogenerated between #000 and #ff3a5c.
  dark9: '#e53452',
  dark8: '#cc2e49',
  dark7: '#b22840',
  dark6: '#992237',
  dark5: '#7f1d2e',
  dark4: '#661724',
  dark3: '#4c111b',
  dark2: '#330b12',
  dark1: '#190509',
}

const SecondaryColors = {
  light0: '#FBFAFC',
  light1: '#efebf7',
  light2: '#e0d7f0',
  light3: '#d1c3e9',
  light4: '#c2b0e2',
  light5: '#b39cdb',
  light6: '#a388d3',
  light7: '#9475cc',
  light8: '#8561c5',
  light9: '#764dbe',
  main: '#673ab7',
  dark9: '#5c34a4',
  dark8: '#522e92',
  dark7: '#482880',
  dark6: '#3d226d',
  dark5: '#331d5b',
  dark4: '#291749',
  dark3: '#1e1136',
  dark2: '#140b24',
  dark1: '#0a0512',
}

const BlendedColors = {
  blend1: '#773aac',
  blend2: '#8839a2',
  blend3: '#993998',
  blend4: '#aa3a8e',
  blend5: '#bb3984',
  blend6: '#cc3a7a',
  blend7: '#dd3a70',
  blend8: '#ee3a66',
}

const colors = {
  accent: 'rgba(50, 0, 50, 0.8)',
  primary: PrimaryColors,
  secondary: SecondaryColors,
  blend: BlendedColors,
  bgDark: 'rgb(55, 59, 70)',
  ui: {
    bright: '#FFC9D2',
    light: '#f5f3f7',
    whisper: '#fbfafc',
  },
  gray: {
    dark: gray(8, 270),
    copy: gray(12, 270),
    calm: gray(46, 270),
  },
  defaultHover: color(SecondaryColors.light7)
    .alpha(0.8)
    .cssa(),
  defaultLink: color(PrimaryColors.main)
    .alpha(0.8)
    .cssa(),
}

export default colors
