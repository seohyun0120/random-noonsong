import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Top from './components/TopContainer'
import Main from './components/MainContainer'
import Bottom from './components/BottomContainer'

export default () => (
  <Fragment>
    <App />
    <GlobalStyle />
  </Fragment>
)

interface IAppState {
  inputText: string,
  isConvertAvailable: boolean;
}

class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    inputText: '',
    isConvertAvailable: false,
  }

  render() {
    return (
      <Container>
        <Top />
        <Main />
        <Bottom />
      </Container>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  html {
    display: block;
    font-size: 30px;
    user-select: none;
    max-width: 39rem;
    padding: 2.625rem 1.21875rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    height: 100%;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
