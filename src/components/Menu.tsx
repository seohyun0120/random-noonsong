import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IMenuProps {
  id: string
  open: boolean
  setOpen: (open: boolean) => void
}

export default function Menu(props: IMenuProps) {
  const isHidden = props.open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu
      open={props.open}
      aria-hidden={!isHidden}
      {...props}
    >
      <Link
        to='/random-noonsong'
        tabIndex={tabIndex}
        onClick={() => props.setOpen(!props.open)} style={{ textDecoration: 'none', outline: 0 }}
      >
        <MenuText>랜덤눈송이</MenuText>
      </Link>
      <Link
        to='/about'
        tabIndex={tabIndex}
        onClick={() => props.setOpen(!props.open)} style={{ textDecoration: 'none', outline: 0 }}
      >
        <MenuText>About</MenuText>
      </Link>
    </StyledMenu >
  )
}

export const StyledMenu = styled.div<IMenuProps>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.nsLabBlack};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  width: 18rem;
  height: 100%;
  position: absolute;
  text-align: left;
  padding: 5.5rem 2rem 2rem 2rem;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
  }
`

const MenuText = styled.div`
  font-size: 2.25rem;
  padding: 1rem 0;
  font-weight: bold;
  color: ${({ theme }) => theme.nsLabWhite};
  text-decoration: none;
  transition: color 0.3s linear;
  &:hover {
    color: ${({ theme }) => theme.nsLabGold};
  }
`
