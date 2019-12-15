import React from 'react'
import styled from 'styled-components'
import myImg from '../../assets/noonsong.png'
import { EmojiData, Emoji } from 'emoji-mart'

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
          <OuterPicture
            personalColor={this.props.personalColor}
          >
            <Picture
              src={myImg}
              title='my_random_noonsong'
            />
          </OuterPicture>
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
      <PictureContainer id='pictureContainer'>
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
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const NoonsongContainer = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EmojiContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Blank = styled.div`
  width: 42px;
  height: 42px;
`

const EmojiBox = styled.div`
  width: 42px;
  height: 42px;
`

const Picture = styled.img`
  width: 100%;
  transform: scale(1.02);
`

const OuterPicture = styled.div<IColorProps>`
  background: ${(props) => props.personalColor};
  width: 42px;
  height: 42px;
`