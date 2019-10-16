import React from 'react'
import styled from 'styled-components'
import myImg from '../assets/default_noonsong.png'
import { EmojiData, Emoji } from 'emoji-mart';

interface IPictureProps {
  personalColor: string
  personalEmoji: EmojiData[]
}

export default class PictureBox extends React.Component<IPictureProps> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <PictureContainer>
        <Picture
          src={myImg}
          personalColor={this.props.personalColor}
          title='my_random_noonsong'
        />
        <Emoji
          emoji={this.props.personalEmoji[0]}
          set='apple'
          size={33}
          sheetSize={64}
        />
        <Picture
          src={myImg}
          personalColor={this.props.personalColor}
          title='my_random_noonsong'
        />
        <Emoji
          emoji={this.props.personalEmoji[0]}
          set='apple'
          size={33}
          sheetSize={64}
        />
        <Picture
          src={myImg}
          personalColor={this.props.personalColor}
          title='my_random_noonsong'
        />
        <Emoji
          emoji={this.props.personalEmoji[0]}
          set='apple'
          size={33}
          sheetSize={64}
        />
        <Picture
          src={myImg}
          personalColor={this.props.personalColor}
          title='my_random_noonsong'
        />
        <Emoji
          emoji={this.props.personalEmoji[0]}
          set='apple'
          size={33}
          sheetSize={64}
        />
      </PictureContainer>
    )
  }
}

interface IColorProps {
  personalColor: string
}

const PictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Picture = styled.img<IColorProps>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.personalColor}
`