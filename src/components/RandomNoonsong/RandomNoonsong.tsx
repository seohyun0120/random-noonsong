import React from 'react'
import styled from 'styled-components'
import Intro from './RandomNoonsongIntro'
import Main from './RandomNoonsongMain'

export default class RandomNoonsong extends React.Component {
  render() {
    return (
      <Container>
        <Intro />
        <Main />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  height: 100%;
`
