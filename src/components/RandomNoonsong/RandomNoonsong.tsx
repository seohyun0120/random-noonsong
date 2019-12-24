import React from 'react'
import Intro from './RandomNoonsongIntro'
import Main from './RandomNoonsongMain'
import styled from 'styled-components'

export default function RandomNoonsong() {
  return (
    <Container>
      <Intro />
      <Main />
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`