import styled from 'styled-components'

const NextButton = styled.button`
appearance: none;
background-color: ${({ theme }) => theme.nsLabWhite};
border: 0;
cursor: pointer;
padding: 0;
font-weight: 700;
font-size: 1.5rem;
align-items: right;
outline: none;
`

const BackButton = styled.button`
appearance: none;
background-color: ${({ theme }) => theme.nsLabWhite};
border: 0;
cursor: pointer;
padding: 0;
font-weight: 700;
font-size: 1.5rem;
align-items: left;
outline: none;
`

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 8rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 2rem;
  }
`

export {
  ButtonContainer,
  NextButton,
  BackButton
}