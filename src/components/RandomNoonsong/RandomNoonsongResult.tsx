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
              '{this.props.personalNickName}'
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
    const element = document.getElementById(idName) as HTMLInputElement
    const scale = 1500 / element.offsetWidth
    console.log(scale, element.offsetWidth)
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
  width: 100%;
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
  color: ${(props) => props.personalColor};
`

