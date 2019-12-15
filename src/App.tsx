import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import SideMenu from './components/Sidebar'
import RandomNoonsong from './components/RandomNoonsong'
import About from './components/About'
import TopContainer from './components/Top/TopContainer'

export default () => (
  <BrowserRouter>
    <Fragment>
      <App />
      <GlobalStyle />
    </Fragment>
  </BrowserRouter>
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
        <TopContainer />
        <Route exact path='/' component={RandomNoonsong} />
        <Route exact path='/info' component={About} />
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
    /* max-width: 39rem; */
    padding: 0rem 1.21875rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    height: 100%;
  }
`

const Container = styled.div`
  display: block;
  flex-direction: column;
  height: 100%;
`
