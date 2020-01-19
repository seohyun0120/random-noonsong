import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  values: {
    nickname: string
  }
  handleChange: any
  nextStep: () => void
  prevStep: () => void
}

export default class Quesiton1 extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  saveAndContinue = (e: any) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e: any) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const regexp = /^[a-zA-Z]*$/
    console.log((this.props.values.nickname).match(regexp))
    const { values } = this.props
    return (
      <>
        <Container>
          <Title>
            <h1>question 1.</h1>
            <h2>자신임을 확인할 수 있는</h2>
            <h2>고유 식별 문자값을 입력한다.</h2>
          </Title>
          <Form
            type='text'
            maxLength={8}
            pattern='[a-zA-Z]{1,8}'
            placeholder='noonsong'
            value={values.nickname}
            onChange={(e) => this.props.handleChange(e)}
          >
          </Form>
          <ValidateText>영문 최대 8자</ValidateText>
        </Container>
        <ButtonContainer>
          <BackButton
            onClick={this.back}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '1rem' }} />
            back
          </BackButton>
          <NextButton
            onClick={this.saveAndContinue}
          >
            next
          <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '1rem' }} />
          </NextButton>
        </ButtonContainer>
      </>
    )
  }
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  max-width: 1020px;
  padding: 1rem 5rem;
  text-align: left;
  font-weight: 700;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem 2rem;
  }
`

const Title = styled.div`
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.75rem;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.625rem;
      margin: 0;
    }
  }
`

const Form = styled.input.attrs({
  type: 'text'
})`
  border: 0;
  background: transparent;
  border-bottom: 3px solid black;
  outline: 0;
  width: 100%;
  font-size: 3rem;
  margin: 3rem 0 0 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.625rem;
    margin: 1.5rem 0 0 0;
  }
`

const ValidateText = styled.div`
  text-align: right;
  font-size: 1.5rem;
  margin: 1rem 0 0 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1rem;
    margin: .5rem 0 0 0;
  }
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
