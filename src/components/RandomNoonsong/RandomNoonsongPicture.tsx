import React from 'react'
import styled from 'styled-components'
import myImg from '../../assets/noonsong.png'
import { EmojiData, Emoji } from 'emoji-mart'

interface IPictureProps {
  personalColor: string
  personalEmoji: EmojiData[]
}

const noonsongData = [1, 0, 1, 0, 1, 0, 1, 0]
const emojiData = [0, 2, 0, 2, 0, 2, 0, 2]

const PictureBox = (props: IPictureProps) => {
  const noonsongImg = noonsongData.map((i) => {
    if (i == 0) {
      return <Blank />
    } else {
      return (
        <OuterPicture
          personalColor={props.personalColor}
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
            emoji={props.personalEmoji[0]}
            set='apple'
            size={33}
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
interface IColorProps {
  personalColor: string
}

const PictureContainer = styled.div`
  background-color: ${({ theme }) => theme.nsLabWhite};
  display: inline-block;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: .2rem;
`

const NoonsongContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const EmojiContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 38px;
  }
`

const Blank = styled.div`
  width: 55px;
  height: 55px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 38px;
    height: 38px;
  }
`

const EmojiBox = styled.div`
  width: 55px;
  height: 55px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 38px;
    height: 38px;
    font-size: 38px;
  }
`

const Picture = styled.img`
  width: 100%;
  transform: scale(1.02);
`

const OuterPicture = styled.div<IColorProps>`
  background-color: ${(props) => props.personalColor};
  width: 54px;
  height: 54px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 38px;
    height: 38px;
  }
`

export default PictureBox;
