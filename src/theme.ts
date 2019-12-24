import baseStyled, { ThemedStyledInterface } from 'styled-components'

export const theme = {
  primaryWhite: '#FFFFFF',
  primaryBlack: '#000000',
  primaryOrange: '#fd7e14',
  primaryBlue: '#74c0fc',
  primaryGreen: '#40c057',
  primaryGray: '#343a40',
  mobile: '576px'
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>
