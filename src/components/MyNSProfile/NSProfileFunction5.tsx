import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { function5Checkbox } from './checkbox'
import { ButtonContainer, NextButton, BackButton } from './style'
interface IProps {
  values: {
    function5: number
  }
  handleChange: any
  nextStep: () => void
  prevStep: () => void
}

interface IState {
  selectedItem: number[]
}

export default class Quesiton5 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  state: IState = {
    selectedItem: [],
  }

  render() {
    return (
      <>
        <Container>
          <Title>
            <h1>question 5.</h1>
            <h2>'숙명'하면 떠오르는 색은?</h2>
          </Title>
          <Selection>
            {function5Checkbox.map((item, id) => (
              <CheckBoxLabel key={item.id}>
                <SelectButton
                  onClick={this.onSelectButtonClick(item.id)}
                >
                  {item.name}
                </SelectButton>
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

  saveAndContinue = (e: any) => {
    e.preventDefault()
    this.props.handleChange(this.state.selectedItem[0])
    this.props.nextStep()
  }

  back = (e: any) => {
    e.preventDefault()
    this.props.prevStep()
  }

  onSelectButtonClick = (item: number) => () => {
    this.setState({ selectedItem: [item] })
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

const SelectButton = styled.div`
  appearance: none;
  border: 2px solid;
  border-radius: .25rem;
  color: red;
  cursor: pointer;
  font-size: 1.125rem;
  width: 100%;
  height: 2.5rem;
  margin-left: 0.25em;
  outline: none;
`

const Selection = styled.div`
  display: block;
`
