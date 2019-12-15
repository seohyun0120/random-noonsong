import React from 'react'
import styled from 'styled-components'

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Description> 👩🏻‍💻 </Description>
        <LinkDescription
          href='https://github.com/seohyun0120/random-noonsong'
        >
          Github
        </LinkDescription>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 5rem;
  margin-top: auto;
`

const Description = styled.div`
  font-size: 13px;
  font-weight: 500;
`

const LinkDescription = styled.a`
  color: #3b5bdb;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  padding: 0 .125rem; 
`
