import React, { Fragment } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'

export default () => (
  <Fragment>
    <App />
    <GlobalStyle />
  </Fragment>
)

interface IState {
  inputText: string,
  isConvertAvailable: boolean;
}

class App extends React.Component<{}, IState> {
  state: IState = {
    inputText: '',
    isConvertAvailable: false,
  }

  render() {
    return (
      <Container>
        <InputContainer>
          <Title>Random Noonsong</Title>
        </InputContainer>
      </Container>
    )
  }

  onTextInput = (event: any) => {
    this.setState({
      inputText: event.target.value,
      isConvertAvailable: true,
    })
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  html {
    font-size: 30px;
    user-select: none;
  }
  html, #app, body {
    height: 100%;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  height: 100%;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

const InputContainer = styled.div`
  height: 1rem;
`
