import React from 'react'
import styled from 'styled-components'
import nsLabLogo from '../../assets/noonsong.png'
import { theme } from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function LandingPage() {
  return (
    <Container>
      <LogoContainer>
        <NSContainer>
          <OuterLogo
            personalColor={theme.nsLabGold}
          >
            <Logo
              src={nsLabLogo}
              title='my_random_noonsong'
            />
          </OuterLogo>
          <OuterLogo
            personalColor={theme.nsLabBlue}
          >
            <Logo
              src={nsLabLogo}
              title='my_random_noonsong'
            />
          </OuterLogo>
        </NSContainer>
        <Text>
          <span>눈 송 L A B</span>
        </Text>
      </LogoContainer>
      <LinkContainer>
        <LinkListContainer>
          <Description>
            <span>랜덤 눈송이 만들기</span>
          </Description>
          <ToButton
            personalColor={theme.nsLabBlue}
          >
            <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '1rem' }} />
            GO
          </ToButton>
        </LinkListContainer>
        <LinkListContainer>
          <Description>
            <span>About 눈송 L A B</span>
          </Description>
          <ToButton
            personalColor={theme.nsLabBlue}
          >
            <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '1rem' }} />
            GO
          </ToButton>
        </LinkListContainer>
      </LinkContainer>
    </Container>
  )
}

interface IColorProps {
  personalColor: string
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LogoContainer = styled.div`
  background-color: ${({ theme }) => theme.nsLabWhite};
`

const NSContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const OuterLogo = styled.div<IColorProps>`
  background: ${(props) => props.personalColor};
  width: 250px;
  height: 250px;
  margin: 0 .25rem;

  @media (max-width: 900px) {
    width: 150px;
    height: 150px;
  }
`

const Logo = styled.img`
  width: 100%;
  transform: scale(1.01);
`

const Text = styled.div`
  display: flex;
  justify-content: center;
  font-family: '리디바탕';

  span {
    display: flex;
    font-size: 5rem;
    font-weight: 700;
    margin: 0 4rem;
  }

  @media (max-width: 900px) {
    span {
      font-size: 48px;
      font-weight: 600;
      margin: 0 2rem;
    }
  }
`

const LinkContainer = styled.div`
  padding: 2rem 5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem 3rem;
  }
`

const LinkListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: .5rem 0 0 0;
  }
`

const ToButton = styled.button<IColorProps>`
  appearance: none;
  color: ${({ theme }) => theme.nsLabWhite};
  background-color: ${(props) => props.personalColor};
  cursor: pointer;
  border: 0;
  border-radius: .25rem;
  font-size: 1.25rem;
  height: 2.5rem;
  outline: none;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${({ theme }) => theme.nsLabGold};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 13px;
    height: 1.25rem;
  }
`

const Description = styled.div`
  display: flex;
  justify-content: center;
  font-family: '리디바탕';

  span {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    span {
      font-size: 16.5px;
    }
  }
`