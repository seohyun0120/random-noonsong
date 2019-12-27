import 'emoji-mart/css/emoji-mart.css'
import React, { useState } from 'react'
import Result from './RandomNoonsongResult'
import styled, { css } from 'styled-components'
import { stringToColor, customizedEmojiData } from '../../utils'
import { Emoji, BaseEmoji, Picker } from 'emoji-mart'

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
          onChange={(e) => onChangeInput(e)}
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
            : null}
        </SelectedEmoji>
        <ConvertButton
          disabled={inputValue == '' || inputEmoji.length == 0}
          onClick={onClickConvertButton}
          isConvertAvailable={inputValue != '' && inputEmoji.length > 0}
        >
          변환
        </ConvertButton>
      </InputContainer>
      <EmojiContainer>
        {customizedEmojiData.map((key) => (
          <Picker
            <Emoji
              onClick={(e) => onClickEmoji(e)}
              key={key.id}
              emoji={key.colons}
            set='apple'
            emojiSize={24}
            perLine={27}
            defaultSkin={1}
            onSelect={(e) => onClickEmoji(e)}
            showPreview={false}
            showSkinTones={false}
          />
        }
        ))}
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
  padding: 1rem 0;
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
  color: ${({ theme }) => theme.primaryBlack};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 15px;
  }
`

const SelectedEmoji = styled.div`
  border-radius: .25rem;
  background-color: rgba(0, 0, 0, .1);
  margin-right: 0.25em;
  height: 2.5rem;
  width: 5rem;
  text-align: center;

  span {
    margin-top: .175rem;
  }
`

interface IColorProps {
  isConvertAvailable: boolean
}

const ConvertButton = styled.button<IColorProps>`
  appearance: none;
  background-color: ${({ theme }) => theme.primaryGray};
  color: ${({ theme }) => theme.primaryWhite};
  cursor: pointer;
  border: 0;
  border-radius: .25rem;
  font-size: 1.125rem;
  width: 5rem;
  height: 2.5rem;
  outline: none;
  ${(props) => props.isConvertAvailable && css`
    background-color: ${({ theme }) => theme.nsLabGold};
  `}

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 15px;
    width: 4rem;
  }
`

const EmojiContainer = styled.div`
  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
`

const EmojiBox = styled.div`
  border: 0;
  height: 2rem;

  button {
    cursor: pointer;
    outline: none;
  }
`

const OutputContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 1rem 0;
`

export default Main;
