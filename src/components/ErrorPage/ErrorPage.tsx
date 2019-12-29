import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import ErrorLogo from '../../assets/noonsong.png'

export default function ErrorPage() {
  return (
    <Container>
      <TextContainer>
        <TitleContainer>
          <Title>S O R R Y</Title>
          <SubTitle>PAGE NOT FOUND</SubTitle>
          <Description>찾으시는 페이지가 없습니다</Description>
        </TitleContainer>
      </TextContainer>
      <PictureContainer>
        <NumTitle>4</NumTitle>
        <OuterLogo
          personalColor={theme.nsLabGold}
        >
          <Logo
            src={ErrorLogo}
            title='my_random_noonsong'
          />
        </OuterLogo>
        <NumTitle>4</NumTitle>
      </PictureContainer>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const TextContainer = styled.div`
  background-color: ${({ theme }) => theme.nsLabWhite};
`

const TitleContainer = styled.div`
  display: inline;
  text-align: center;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 8rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 44px;
    font-weight: 600;
  }
`

const SubTitle = styled.div`
  font-size: 3.875rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 21px;
    font-weight: 600;
  }
`

const Description = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin: .5rem 0 0 0;

  @media (max-width: 900px) {
    font-size: 16px;
    font-weight: 500;
  }
`

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 0 0;
`

interface IColorProps {
  personalColor: string
}

const OuterLogo = styled.div<IColorProps>`
  background: ${(props) => props.personalColor};
  width: 250px;
  height: 250px;
  margin: 1.5rem .25rem;

  @media (max-width: 900px) {
    width: 80px;
    height: 80px;
    margin: 0;
  }
`

const Logo = styled.img`
  width: 100%;
  transform: scale(1.01);

  @media (max-width: 900px) {
    transform: scale(1.025);
  }
`

const NumTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.nsLabGold};

  @media (max-width: 900px) {
    font-size: 80px;
    font-weight: 600;
  }
`