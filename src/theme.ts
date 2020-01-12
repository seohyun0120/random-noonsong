import baseStyled, { ThemedStyledInterface } from 'styled-components'

export const theme = {
  nsLabWhite: '#FFFFFF',
  nsLabBlack: '#000000',
  nsLabGold: '#84754e',
  nsLabBlue: '#003087',
  nsLabSkyBlue: '#0072ce',
  nsLabYellow: '#fcc419',
  nsLabRed: '#f55950',
  nsLabGray: '#f5f5f5',
  mobile: '1024px'
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>
