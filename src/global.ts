import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 1rem;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryWhite};
    color: ${({ theme }) => theme.primaryBlack};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    height: 100%;
    justify-content: center;
    text-rendering: optimizeLegibility;
    overflow: hidden;
  }
`
