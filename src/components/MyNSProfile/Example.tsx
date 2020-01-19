import React from 'react'
import styled from 'styled-components'
import face from '../../assets/svg/ns_face_tired.svg'
import cloth from '../../assets/svg/ns_cloth_hoodie_green.svg'
import drink from '../../assets/svg/ns_drink_tejava.svg'
import thing from '../../assets/svg/ns_things_keyboard.svg'
import nametag from '../../assets/svg/ns_nametag.svg'
import labTitle from '../../assets/svg/ns_lab_title.svg'

export default function MyNSProfile() {
  return (
    <Container>
      <BottomBackground></BottomBackground>
      <TopBackground></TopBackground>
      <Nametag src={nametag} />
      <Name length={7}>{'seohyun'}</Name>
      <NSLabTitle src={labTitle} />
      <Cloth src={cloth} />
      <Face src={face} />
      <Thing src={thing} />
      <Drink src={drink} />
    </Container>
  )
}

interface IColorProps {
  personalColor: string
}

interface IStringProps {
  length: number;
}

const Container = styled.div`
  display: flex;
`

const NSLabTitle = styled.img`
  position: absolute;
  width: 900px;
`

const BottomBackground = styled.div`
  position: absolute;
  width: 900px;
  height: 900px;
  background: ${({ theme }) => theme.nsLabRed};
`

const TopBackground = styled.div`
  position: absolute;
  width: 900px;
  height: 640px;
  background: ${({ theme }) => theme.nsLabYellow};
`

const Nametag = styled.img`
  position: absolute;
  width: 900px;
`

const Name = styled.div<IStringProps>`
  position: fixed;
  top: 870px;
  left: ${(props) => 770 - (props.length) * 9}px;
  font-size: 33px;
  font-weight: 700;
`

const Face = styled.img`
  position: absolute;
  width: 900px;
`

const Cloth = styled.img`
  position: absolute;
  width: 900px;
`

const Drink = styled.img`
  position: absolute;
  width: 900px;
`

const Thing = styled.img`
  position: absolute;
  width: 900px;
`