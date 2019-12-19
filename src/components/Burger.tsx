import styled from 'styled-components'
import React from 'react'

interface IBurgerProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function Burger(props: IBurgerProps) {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-expanded={isExpanded}
      open={props.open}
      onClick={() => props.setOpen(!props.open)}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

interface IButtonProps {
  open: boolean
}

const StyledBurger = styled.button<IButtonProps>`
  position: absolute;
  top: 5%;
  left: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryWhite : theme.primaryBlack};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

