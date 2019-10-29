import React from 'react'
import styled from 'styled-components'
import myImg from '../assets/default_noonsong.png'
import { EmojiData, Emoji } from 'emoji-mart';

interface IPictureProps {
  personalColor: string
  personalEmoji: EmojiData[]
}

let noonsongData = [1, 0, 1, 0, 1, 0, 1, 0]
let emojiData = [0, 2, 0, 2, 0, 2, 0, 2]

export default class PictureBox extends React.Component<IPictureProps> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const noonsongImg = noonsongData.map((i) => {
      if (i == 0) {
        return <Blank />
      } else {
        return (
          <Picture
            src={myImg}
            personalColor={this.props.personalColor}
            title='my_random_noonsong'
          />
        )
      }
    })

    const emojiImg = emojiData.map((i) => {
      if (i == 0) {
        return <Blank />
      } else {
        return (
          <EmojiBox>
            <Emoji
              native={true}
              emoji={this.props.personalEmoji[0]}
              set='apple'
              size={32}
              sheetSize={64}
            />
          </EmojiBox>
        )
      }
    })

    return (
      <PictureContainer>
        <NoonsongContainer>
          {noonsongImg}
        </NoonsongContainer>
        <EmojiContainer>
          {emojiImg}
        </EmojiContainer>
        <NoonsongContainer>
          {noonsongImg}
        </NoonsongContainer>
        <EmojiContainer>
          {emojiImg}
        </EmojiContainer>
        <NoonsongContainer>
          {noonsongImg}
        </NoonsongContainer>
        <EmojiContainer>
          {emojiImg}
        </EmojiContainer>
        <NoonsongContainer>
          {noonsongImg}
        </NoonsongContainer>
        <EmojiContainer>
          {emojiImg}
        </EmojiContainer>
      </PictureContainer>
    )
  }
}

interface IColorProps {
  personalColor: string
}

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const NoonsongContainer = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EmojiContainer = styled.div`
  background-color: #FFF;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Blank = styled.div`
  width: 40px;
  height: 40px;
  background-color: #FFF;
`

const EmojiBox = styled.div`
  width: 40px;
  height: 40px;
  justify-content: center;
`

const Picture = styled.img<IColorProps>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.personalColor}
`
