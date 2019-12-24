import React from 'react'
import styled from 'styled-components'
import domtoimage from 'dom-to-image'
import Picture from './RandomNoonsongPicture'
import { EmojiData } from 'emoji-mart'

interface IResultProps {
  personalNickName: string
  personalColor: string
  personalEmoji: EmojiData[]
  isPersonalReady: boolean
}

const ButtonBox = (props: IResultProps) => {
  const downloadImage = (idName: string) => {
    const element = document.getElementById(idName) as HTMLInputElement
    const scale = 1500 / element.offsetWidth
    domtoimage
      .toPng(element, {
        height: element.offsetHeight * scale,
        width: element.offsetWidth * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left',
          width: element.offsetWidth + 'px',
          height: element.offsetHeight + 'px'
        }
      })
      .then((dataUrl: string) => {
        const link = document.createElement('a')
        link.download = 'myNoonSong.png'
        link.href = dataUrl
        link.click()
      })
  }

  return (
    <>
      {props.isPersonalReady ?
        <ResultContainer>
          <PictureContainer id='random-noonsong'>
            <Picture
              personalColor={props.personalColor}
              personalEmoji={props.personalEmoji}
            />
          </PictureContainer>
          <DetailContainer>
            <Info personalColor={props.personalColor}>
              <h2>{props.personalNickName}</h2> 님의 고유한 색깔은 <h3>{props.personalColor}</h3> 입니다.
            </Info>
            <DownloadButton
              onClick={() => downloadImage('random-noonsong')}
            >
              다운로드
            </DownloadButton>
          </DetailContainer>
        </ResultContainer>
        :
        <>
          <Description>자신만의 닉네임을 입력하고 이모티콘을 골라보세요!</Description>
        </>
      }
    </>
  )
}

const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1020px;
  text-align: left;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`

const PictureContainer = styled.div`
  width: 100%;
`

const DetailContainer = styled.div`
  display: inline-block;
  text-align: left;
  width: 100%;
`

interface IColorProps {
  personalColor: string
}

const Info = styled.div<IColorProps>`
  font-size: 1.25rem;
  font-weight: 400;

  h2 {
    display: inline;
    font-size: 1.325rem;
    font-weight: 600;
  }

  h3 {
    display: inline;
    color: ${(props) => props.personalColor};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 13px;
    padding: .5rem 0 0 0;

    h2 {
      font-size: 14px;
    }
  }
`

const DownloadButton = styled.button`
  appearance: none;
  background-color: ${({ theme }) => theme.primaryGray};
  color: ${({ theme }) => theme.primaryWhite};
  cursor: pointer;
  border: 0;
  border-radius: .25rem;
  outline: none;
  width: 8rem;
  height: 2rem;
  font-size: 1.25rem;
  margin: .5rem 0 0 0; 
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 4rem;
    font-size: 13px;
  }
`

const Description = styled.div`
  font-size: 1.225rem;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 13px;
  }
`

export default ButtonBox;
