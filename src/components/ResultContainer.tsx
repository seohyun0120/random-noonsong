import React from 'react'
import styled from 'styled-components'

interface IResultProps {
  personalNickName: string
  personalColor: string
  isPersonalReady: boolean
}

export default class ButtonBox extends React.Component<IResultProps> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <>
        {this.props.isPersonalReady ?
          <>
            <Description>
              '{this.props.personalNickName}' 눈송이만의 색상은
              <Label
                personalColor={this.props.personalColor}
              > 
                {this.props.personalColor} 
              </Label>
            </Description>
          </>
          :
          <Description>자신만의 닉네임을 입력한 후 '변환' 버튼을 클릭해보세요.</Description>
        }
      </>
    )
  }
}

const Description = styled.div`
  font-size: 13px;
  font-weight: 500;
  display: flex;
`

interface IColorProps {
  personalColor: string
}

const Label = styled.div<IColorProps>`
  margin-left: .15rem;
  color: ${props => props.personalColor}
`