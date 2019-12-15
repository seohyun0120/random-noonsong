import 'emoji-mart/css/emoji-mart.css'
import React from 'react'
import Result from './RandomNoonsongResult'
import styled, { css } from 'styled-components'
import { stringToColor } from '../../utils'
import { Emoji, EmojiData } from 'emoji-mart'

interface IMainState {
  inputText: string
  inputEmoji: EmojiData[]
  isTextAdded: boolean
  isEmojiSelected: boolean
  isPersonalReady: boolean
  selectedNickName: string
  convertedColor: string
}

const customizedEmojiData = [
  {
    id: 'santa',
    colons: ':santa::skin-tone-3:',
  },
  {
    id: 'developer',
    colons: ':female-technologist:'
  },
  {
    id: 'blue_heart',
    colons: ':blue_heart:'
  },
  {
    id: 'heart',
    colons: ':heart:'
  },
  {
    id: 'heart_eyes',
    colons: ':heart_eyes:'
  },
  {
    id: 'poop',
    colons: ':poop:'
  },
  {
    id: 'dog',
    colons: ':dog:',
  },
  {
    id: 'mushroom',
    colons: ':mushroom:',
  }
]

export default class Main extends React.Component<{}, IMainState> {
  state: IMainState = {
    inputText: '',
    selectedNickName: '',
    inputEmoji: [],
    isTextAdded: false,
    isEmojiSelected: false,
    isPersonalReady: false,
    convertedColor: '#000000',
  }

  render() {
    return (
      <MainContainer>
        <InputContainer>
          <InputBox
            type='string'
            maxLength={10}
            onChange={this.onTextInput}
          />
          <SelectedEmoji>
            {this.state.inputEmoji.length > 0 ?
              <>
                <Emoji
                  emoji={this.state.inputEmoji[0]}
                  set='apple'
                  size={28}
                  sheetSize={64}
                />
              </>
              : null}
          </SelectedEmoji>
          <ConvertButton
            disabled={!this.state.isTextAdded && !this.state.isEmojiSelected}
            onClick={this.onClickConvertButton}
            isConvertAvailable={this.state.isTextAdded && this.state.isEmojiSelected}
          >
            변환
          </ConvertButton>
        </InputContainer>
        <EmojiContainer>
          {customizedEmojiData.map((key) => (
            <EmojiBox>
              <Emoji
                onClick={this.addEmoji}
                key={key.id}
                emoji={key.colons}
                set='apple'
                size={28}
                sheetSize={64}
              />
            </EmojiBox>
          ))}
        </EmojiContainer>
        <Space />
        <OutputContainer>
          <Result
            personalNickName={this.state.selectedNickName}
            personalColor={this.state.convertedColor}
            personalEmoji={this.state.inputEmoji}
            isPersonalReady={this.state.isPersonalReady}
          />
        </OutputContainer>
      </MainContainer>
    )
  }

  onTextInput = (event: any) => {
    if (event.target.value.length != 0) {
      this.setState({
        inputText: event.target.value,
        isTextAdded: true,
      })
    } else {
      this.setState({
        inputText: '',
      })
    }
  }

  onClickConvertButton = () => {
    this.setState({
      convertedColor: stringToColor(this.state.inputText),
      selectedNickName: this.state.inputText,
      isPersonalReady: this.state.isTextAdded && this.state.isEmojiSelected
    })
  }

  addEmoji = (emoji: any) => {
    console.log(emoji)
    this.setState(() => ({
      inputEmoji: [emoji],
      isEmojiSelected: true,
    }))
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Space = styled.div`
  flex: 1;
`

const InputContainer = styled.div`
  height: 2rem;
  margin: .5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EmojiContainer = styled.div`
  height: 2rem;
  margin-bottom: .5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const OutputContainer = styled.div`
  display: flex;
  height: 100%;
`

const InputBox = styled.input`
  width: 100%;
  height: 1.25rem;
  display: flex;
  text-align: center;
  border: 0;
  border-radius: .125rem;
  font-size: .7rem;
  flex: auto;
  margin-right: 0.25em;
  outline: none;
  background-color: rgba(0, 0, 0, .1);
  color: #000;
`

const EmojiBox = styled.button`
  background-color: rgba(0, 0, 0, .05);
  border: 0;
  border-radius: .125rem;
  cursor: pointer;
  display: flex;
  height: 1rem;
  justify-content: center;
  font-size: .7rem;
  flex: auto;
  margin-right: 0.25em;
  outline: none;
`

const SelectedEmoji = styled.div`
  width: 3rem;
  height: 1.25rem;
  padding: .125rem;
  margin-right: 0.25em;
  border-radius: .125rem;
  font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji';
  background-color: rgba(0, 0, 0, .1);
  display: flex;
  justify-content: center;
`
interface IColorProps {
  isConvertAvailable: boolean
}

const ConvertButton = styled.button<IColorProps>`
  appearance: none;
  background-color: #868e96;
  color: #fff;
  cursor: pointer;
  border-radius: .125rem;
  border: 0px;
  font-size: .6rem;
  width: 2.5rem;
  height: 1.25rem;
  outline: none;
  ${(props) => props.isConvertAvailable && css`
    background-color: #3b5bdb;
  `}
`
