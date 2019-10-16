import React from 'react'
import styled from 'styled-components'
import myImg from '../assets/default_noonsong.png'
import Picture from './PictureContainer'
import { EmojiData } from 'emoji-mart';

interface IResultProps {
  personalNickName: string
  personalColor: string
  personalEmoji: EmojiData[]
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
          <ResultContainer>
            <Description>
              '{this.props.personalNickName}' 눈송이만의 색상은
              <Label
                personalColor={this.props.personalColor}
              >
                {this.props.personalColor}
              </Label>
            </Description>
            <Picture
              personalColor={this.props.personalColor}
              personalEmoji={this.props.personalEmoji}
            />
          </ResultContainer>
          :
          <>
            <Description>자신만의 닉네임을 입력하고 이모티콘을 골라보세요!</Description>
          </>
        }
      </>
    )
  }
}

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Description = styled.div`
  font-size: 13px;
  font-weight: 500;
  display: flex;
`

interface IColorProps {
  personalColor: string
}

const PictureContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Label = styled.div<IColorProps>`
  margin-left: .15rem;
  color: ${(props) => props.personalColor}
`
