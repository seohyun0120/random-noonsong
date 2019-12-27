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
        link.download = `ns_lab_${props.personalNickName}`
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
            <Text>
              <Description personalColor={props.personalColor}> Random-Noonsong for NS LAB </Description>
              <Description personalColor={props.personalColor}> Nickname {props.personalNickName} </Description>
              <Description personalColor={props.personalColor}> HEX Code <span>{props.personalColor}</span> </Description>
              <Description personalColor={props.personalColor}> Sookmyung, Seoul KR </Description>
            </Text>
            <DownloadButton
              onClick={() => downloadImage('random-noonsong')}
            >
              다운로드
            </DownloadButton>
          </DetailContainer>
        </ResultContainer>
        : null
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

const PictureContainer = styled.div``

const DetailContainer = styled.div`
  display: block;
  text-align: left;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`

interface IColorProps {
  personalColor: string
}

const Text = styled.div`
  text-align: left;
`

const Description = styled.div<IColorProps>`
  color: ${({ theme }) => theme.nsLabBlack};
  font-size: 1.5rem;
  font-weight: 700;
  margin: .25rem 0 0 2.75rem;

  span {
    color: ${(props) => props.personalColor};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 13px;
    margin: 0;
  }
`

const DownloadButton = styled.button`
  appearance: none;
  background-color: ${({ theme }) => theme.nsLabGold};
  color: ${({ theme }) => theme.nsLabWhite};
  cursor: pointer;
  border: 0;
  border-radius: .25rem;
  outline: none;
  width: 8rem;
  height: 3rem;
  font-size: 1.25rem;
  margin: .5rem 0 0 2.75rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 4rem;
    width: 4rem;
    font-size: 13px;
    margin: 0 0 0 .5rem;
  }
`

export default ButtonBox;
