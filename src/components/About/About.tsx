import React from 'react'
import styled from 'styled-components'

export default function About() {
  return (
    <Container>
      <TextContainer>
        <Title>
          눈송 L A B 🤖
        </Title>
        <Description>made by <span>@seohyun0120</span></Description>
        <Description>
          <span>눈송 LAB(Noonsong LAB)</span>은 숙명여자대학교 마스코트인 <span>눈송이</span>를 활용하여 만들어진 Web Application입니다. <br />
          심심한 숙대생이 남는 시간을 활용하여 직접 만들어보았습니다. <br />
          앞으로 계속 추가될 다양한 <span>눈송이</span>테마들을 기대해주세요!
        </Description>
      </TextContainer>
      <HelpContainer>
        <HelpTitle>
          사람을 찾아요 👀
        </HelpTitle>
        <HelpDescription>
          <h2>개발하세요?</h2>
          <h3>
            <span>눈송LAB</span>에 관한 <span>PR & Issue</span>는 언제든지 환영입니다!
            <a href='https://github.com/seohyun0120/random-noonsong'>
              Github
            </a>
            으로 오세요. 같이 만들어봐요!
          </h3>
          <h2>눈송이 짤을 그려보신 적 있으신가요?</h2>
          <h3>
            눈송템 공구를 해보셨던 총대 학우분들, 눈송이 짤을 그려주시는 숨겨진 학우분들을 찾습니다! <br />
            <span> sarah5734@sm.ac.kr </span>으로 이메일 보내주세요. <br />
            눈송LAB에 다양한 눈송이들이 들어오는 것을 보고싶어요!
          </h3>
        </HelpDescription>
      </HelpContainer>
      <ReleaseInfoContainer>
        <SubTitle>
          Release Note 🔨
        </SubTitle>
        <SubDescription>
          <h2>v1.0</h2>
          <h3>December 29, 2019</h3>
          <h4> 🎉 랜덤눈송이(RandomNoonsong) 출시</h4>
        </SubDescription>
      </ReleaseInfoContainer>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  overflow-y: scroll;
`

const TextContainer = styled.div`
  display: inline-block;
  max-width: 1020px;
  padding: 3rem 2rem 2rem 2rem;
  text-align: left;
  width: 100%;
`

const Title = styled.div`
  display: inline;
  font-size: 3.125rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 24px;
  }
`

const Description = styled.div`
  font-size: 1.225rem;
  font-weight: 400;
  margin: 1rem 0 0 0;
  line-height: 1.5;

  span {
    color: ${({ theme }) => theme.nsLabSkyBlue};
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 13px;

    span {
      font-size: 14px;
    }
  }
`

const SubTitle = styled.div`
  display: inline;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 3rem 0 0 0;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`

const ReleaseInfoContainer = styled.div`
  display: inline-block;
  max-width: 1020px;
  padding: 1rem 2rem;
  text-align: left;
  width: 100%;
`

const SubDescription = styled.div`
  h2 {
    font-size: 1.75rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.325rem;
    font-weight: 500;
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
      font-size: 15px;
    }

    h3 {
      font-size: 13px;
    }

    h4 {
      font-size: 12px;
    }
  }
`

const HelpContainer = styled.div`
  display: inline-block;
  max-width: 1020px;
  padding: 1rem 2rem;
  text-align: left;
  width: 100%;
`

const HelpTitle = styled.div`
  display: inline;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 3rem 0 0 0;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`

const HelpDescription = styled.div`
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
  }

  a {
    margin: 0 .2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.nsLabSkyBlue};
  }

  span {
    color: ${({ theme }) => theme.nsLabSkyBlue};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
      font-size: 13px;
    }

    h3 {
      font-size: 12px;
    }
  }
`