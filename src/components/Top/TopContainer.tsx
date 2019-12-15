import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar'

interface IHamburgerState {
  isClicked: boolean
}

export default class TopContainer extends React.Component<{}, IHamburgerState> {
  state: IHamburgerState = {
    isClicked: false
  }

  render() {
    return (
      <>
        <Container>
          <HamburgerMenu onClick={this.onClickHamburgerMenu}>
            {this.state.isClicked ? <FontAwesomeIcon icon={faTimes} color='white' /> : <FontAwesomeIcon icon={faBars} color='white' />}
          </HamburgerMenu>
        </Container>
        {this.state.isClicked ? <Sidebar /> : <></>}
      </>
    )
  }

  onClickHamburgerMenu = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }
}

const Container = styled.div`
  position: absolute;
  height: 2rem;
  background-color: black;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 100%;
  transform: translateX(-50%);
  z-index: 10;
  transition: max-width .5s;
`

const HamburgerMenu = styled.div`
  appearance: none;
  cursor: pointer;
  outline: none;
  margin: .325rem .5rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
`
