import React from 'react'
import styled from 'styled-components'

export default class Intro extends React.Component {
  render() {
    return (
      <IntroBox>
        <Title> Random noonsong </Title>
        <Description>나만의 눈송이를 만들어보세요.</Description>
        <Description>닉네임은 최대 10글자까지 입력할 수 있어요.</Description>
        <Description>이모티콘도 하나 골라보세요.</Description>
      </IntroBox>
    )
  }
}

const IntroBox = styled.div`
  display: block;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
`

const Description = styled.div`
  font-size: 13px;
  font-weight: 500;
  padding-top: .25rem;
`