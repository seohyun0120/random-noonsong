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

interface IState {
  checkedItems: Map<string, string>
}

export default class Quesiton2 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  state: IState = {
    checkedItems: new Map()
  }

  checkbox = [
    {
      name: '데자와',
      key: 'checkbox1',
      label: 'tejeva',
    },
    {
      name: '마돈나',
      key: 'checkbox2',
      label: 'madona',
    },
    {
      name: '로즈커피',
      key: 'checkbox3',
      label: 'rose coffee',
    },
    {
      name: '본솔',
      key: 'checkbox4',
      label: 'bonsol',
    },
    {
      name: '스타벅스',
      key: 'checkbox5',
      label: 'starbucks',
    }
  ]

  saveAndContinue = (e: any) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e: any) => {
    e.preventDefault()
    this.props.prevStep()
  }

  handleChange = (e: any) => {
    const item = e.target.name
    const isChecked = e.target.checked
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }))
  }

  render() {
    return (
      <>
        <Container>
          <Title>
            <h1>question 2.</h1>
            <h2>자주 마시는 음료는?</h2>
          </Title>
          <Selection>
            {this.checkbox.map((item, i) => (
              <CheckBoxLabel key={item.key}>
                <CheckBox
                  name={item.name}
                  checked={this.state.checkedItems.get(item.name) ? true : false}
                  onChange={this.handleChange}
                />
                {item.name}
              </CheckBoxLabel>
            ))}
          </Selection>
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

const CheckBoxLabel = styled.div`
  font-size: 1.5rem;
  display: block;
  margin: 1rem 0;
`

const CheckBox = styled.input.attrs({
  type: 'checkbox'
})`
`

const Selection = styled.div`
  display: block;
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
