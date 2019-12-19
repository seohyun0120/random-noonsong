import React from 'react'
import styled from 'styled-components'

export default function Intro() {
  return (
    <Container>
      <Title> Random Noonsong </Title>
      <Description>나만의 눈송이</Description>
      <Description>닉네임을 입력하고 나만의 이모티콘을 골라보세요</Description>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 12.5%;
  left: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
`

const Title = styled.div`
  font-size: 3.125rem;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 26px;
  }
`

const Description = styled.div`
  font-size: 1.225rem;
  font-weight: 500;
  padding-top: .25rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 15px;
  }
`
