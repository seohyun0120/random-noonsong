import 'emoji-mart/css/emoji-mart.css'
import React, { useState } from 'react'
import Result from './RandomNoonsongResult'
import styled, { css } from 'styled-components'
import { stringToColor } from '../../utils'
import { Emoji, BaseEmoji, Picker } from 'emoji-mart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamation, faTimes } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  const [inputValue, setNameValue] = useState('')
  const [inputEmoji, setEmojiValue] = useState([] as BaseEmoji[])
  const [convertedColor, setConvertedColor] = useState('000000')
  const [isPersonalReady, setIsPersonalReady] = useState(false)

  const onClickConvertButton = () => {
    setConvertedColor(stringToColor(inputValue))
    setNameValue(inputValue)
    setEmojiValue(inputEmoji)
    setIsPersonalReady(inputValue != '' && inputEmoji.length > 0)
  }

  const onClickResetButton = () => {
    setConvertedColor(stringToColor(inputValue))
    setNameValue('')
    setEmojiValue([])
    setIsPersonalReady(false)
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length != 0) {
      setNameValue(event.target.value)
    } else {
      setNameValue('')
    }
  }

  const onClickEmoji = (emoji: any) => {
    setEmojiValue([emoji])
  }

  return (
    <Container>
      <InputContainer>
        <InputBox
          type='string'
          maxLength={10}
          value={inputValue}
          placeholder='닉네임을 적어주세요'
          onChange={(e) => onChangeInput(e)}
          disabled={isPersonalReady}
        />
        <SelectedEmoji>
          {inputEmoji.length > 0 ?
            <>
              <Emoji
                emoji={inputEmoji[0]}
                set='apple'
                size={28}
                sheetSize={64}
              />
            </>
            : <PlaceHolderText>이모티콘을 고르세요</PlaceHolderText>}
        </SelectedEmoji>
      </InputContainer>
      <InputContainer>
        <ConvertButton
          disabled={inputValue == '' || inputEmoji.length == 0}
          onClick={onClickConvertButton}
          isConvertAvailable={inputValue != '' && inputEmoji.length > 0}
        >
          <FontAwesomeIcon icon={faCheck} style={{ marginRight: '1rem' }} />
          변환
        </ConvertButton>
        <ResetButton
          onClick={onClickResetButton}
        >
          <FontAwesomeIcon icon={faTimes} style={{ marginRight: '1rem' }} />
          다시 만들기
        </ResetButton>
      </InputContainer>
      <EmojiContainer>
        {isPersonalReady ? null :
          <Picker
            set='apple'
            emojiSize={24}
            perLine={27}
            defaultSkin={1}
            onSelect={(e) => onClickEmoji(e)}
            showPreview={false}
            showSkinTones={false}
          />
        }
      </EmojiContainer>
      <OutputContainer>
        <Result
          personalNickName={inputValue}
          personalColor={convertedColor}
          personalEmoji={inputEmoji}
          isPersonalReady={isPersonalReady}
        />
      </OutputContainer>
    </Container>
  )
}

const Container = styled.div`
  display: inline-block;
  max-width: 1020px;
  padding: 1rem 2rem;
  text-align: left;
  width: 100%;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .5rem 0;
`

const InputBox = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-right: 0.25em;
  text-align: center;
  border: 0;
  border-radius: .25rem;
  outline: none;
  font-size: 1.225rem;
  background-color: rgba(0, 0, 0, .1);
  color: ${({ theme }) => theme.nsLabBlack};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 15px;
  }
`

const SelectedEmoji = styled.div`
  border-radius: .25rem;
  background-color: rgba(0, 0, 0, .1);
  margin-left: 0.25em;
  height: 2.5rem;
  width: 50%;
  text-align: center;

  span {
    margin-top: .175rem;
  }
`

const PlaceHolderText = styled.div`
  color: ${({ theme }) => theme.nsLabGray};
  font-size: 1.125rem;
  margin-top: .75rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    font-size: 11px;
    margin: .875rem 0 0 .375rem;
  }
`

interface IColorProps {
  isConvertAvailable: boolean
}

const ConvertButton = styled.button<IColorProps>`
  appearance: none;
  background-color: ${({ theme }) => theme.nsLabWhite};
  border: 2px solid ${({ theme }) => theme.nsLabBlue};
  border-radius: .25rem;
  color: ${({ theme }) => theme.nsLabBlue};
  cursor: pointer;
  font-size: 1.125rem;
  margin-right: 0.25em;
  width: 100%;
  height: 2.5rem;
  outline: none;
  ${(props) => props.isConvertAvailable && css`
    background-color: ${({ theme }) => theme.nsLabBlue};
    color: ${({ theme }) => theme.nsLabWhite};
    font-weight: 600;
  `}

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 15px;
  }
`

const ResetButton = styled.button`
  appearance: none;
  background-color: ${({ theme }) => theme.nsLabWhite};
  border: 2px solid ${({ theme }) => theme.nsLabGold};
  border-radius: .25rem;
  color: ${({ theme }) => theme.nsLabGold};
  cursor: pointer;
  font-size: 1.125rem;
  width: 100%;
  height: 2.5rem;
  margin-left: 0.25em;
  outline: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 15px;
  }
`

const EmojiContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
`

const OutputContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 1rem 0;
`

export default Main;
