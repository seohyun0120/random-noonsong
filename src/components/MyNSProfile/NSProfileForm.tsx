import React from 'react'
import Question1 from './NSProfileFunction1'
import Question2 from './NSProfileFunction2'
import NSProfileIntro from './NSProfileIntro'

interface IFormState {
  step: number
  nickname: string
  nickname2: string
}

export class NSProfileForm extends React.Component<{}, IFormState> {
  state: IFormState = {
    step: 0,
    nickname: '',
    nickname2: ''
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nickname: e.target.value })
  }

  render() {
    const { step } = this.state
    const { nickname } = this.state
    const values = { nickname }
    switch (step) {
      case 0:
        return (<NSProfileIntro nextStep={this.nextStep} />)
      case 1:
        return (
          <Question1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <Question2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      default:
        return (<NSProfileIntro nextStep={this.nextStep} />)
    }
  }
}

export default NSProfileForm;