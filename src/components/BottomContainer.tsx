import React from 'react'
import styled from 'styled-components'

export default class Bottom extends React.Component {
  render() {
    return (
      <BottomBox>
        <Description> 👩🏻‍💻 </Description>
        <LinkDescription
          href='https://github.com/seohyun0120/random-noonsong'
        >
          Github
        </LinkDescription>
      </BottomBox>
    )
  }
}

const BottomBox = styled.div`
  display: flex;
  padding-top: .25rem;
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
