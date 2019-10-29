import React from 'react'
import styled from 'styled-components'
import domtoimage from 'dom-to-image'
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
            <PictureContainer id='random-noonsong'>
              <Picture
                personalColor={this.props.personalColor}
                personalEmoji={this.props.personalEmoji}
              />
            </PictureContainer>
            <DownloadButton
              onClick={() => this.downloadImage('random-noonsong')}
            >
              다운로드
            </DownloadButton>
          </ResultContainer>
          :
          <>
            <Description>자신만의 닉네임을 입력하고 이모티콘을 골라보세요!</Description>
          </>
        }
      </>
    )
  }

  downloadImage = (idName: string) => {
    const scale = 2
    domtoimage
      .toPng(document.getElementById(idName), {
        height: 320 * scale,
        width: 320 * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
          width: 320 + "px",
          height: 320 + "px"
        }
      })
      .then((dataUrl: string) => {
        const link = document.createElement('a')
        link.download = 'myNoonSong.png'
        link.href = dataUrl
        link.click()
      })

    // domtoimage.toPng(document.getElementById(idName))
    //   .then((dataUrl: string) => {
    //     const link = document.createElement('a')
    //     link.download = 'myNoonSong.png'
    //     link.href = dataUrl
    //     link.click()
    //   })
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
  align-items: center;
  justify-content: center;
`

const DownloadButton = styled.button`
  appearance: none;
  background-color: #3b5bdb;
  color: #fff;
  cursor: pointer;
  border-radius: .125rem;
  border: 0px;
  font-size: .6rem;
  width: 4rem;
  height: 1.25rem;
  outline: none;
`

const Label = styled.div<IColorProps>`
  margin-left: .15rem;
  color: ${(props) => props.personalColor}
`
