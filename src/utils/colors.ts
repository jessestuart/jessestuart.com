/* tslint:disable */
import Color from 'color'
import gray from 'gray-percentage'

interface ColorMap {
  [colorName: string]: string
}

interface Colors {
  accent: string
  bgDark: string
  defaultHover: string
  defaultLink: string
  gray: ColorMap
  primary: ColorMap
  secondary: ColorMap
  ui: ColorMap
}

const primaryColors = {
  // Light Primary shades --
  // autogenerated between #FFF and #FF3A5C.
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
  main: '#ff3a5c',
  // Dark Primary shades --
  // autogenerated between #000 and #FF3A5C.
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

const secondaryColors = {
  // Light Secondary shades (autogenerated).
  light0: '#fbfafc',
  light1: '#efebf7',
  light2: '#e0d7f0',
  light3: '#d1c3e9',
  light4: '#c2b0e2',
  light5: '#b39cdb',
  light6: '#a388d3',
  light7: '#9475cc',
  light8: '#8561c5',
  light9: '#764dbe',
  // Main secondary color.
  main: '#673ab7',
  // Dark secondary shades (autogenerated).
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

const colors: Colors = Object.freeze({
  accent: 'rgba(50, 0, 50, 0.8)',
  primary: primaryColors,
  secondary: secondaryColors,

  bgDark: 'rgb(55, 59, 70)',

  ui: {
    bright: '#ffc9d2',
    light: '#f5f3f7',
    whisper: '#fbfafc',
  },

  gray: {
    dark: gray(8, 270),
    copy: gray(12, 270),
    calm: gray(46, 270),
  },

  defaultHover: Color(secondaryColors.light7)
    .alpha(0.8)
    .rgb()
    .toString(),

  defaultLink: Color(primaryColors.main)
    .alpha(0.8)
    .rgb()
    .toString(),
})

export default colors
