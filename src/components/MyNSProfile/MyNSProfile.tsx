import React from 'react'
import styled from 'styled-components'
import VV1 from '../../assets/svg/noonsong_face_happy.svg'
import VV2 from '../../assets/svg/noonsong_face_sad.svg'
import VV3 from '../../assets/svg/noonsong_face_smile.svg'
import VV4 from '../../assets/svg/noonsong_face_tired.svg'
import VV5 from '../../assets/svg/noonsong_face_zombie.svg'

export default function MyNSProfile() {
  return (
    <Container>
      <Logo src={VV1} />
      <Logo2 src={VV2} />
      <Logo3 src={VV3} />
      <Logo4 src={VV4} />
      <Logo5 src={VV5} />
    </Container>
  )
}

interface IColorProps {
  personalColor: string
}

const Container = styled.div`
  display: flex;
`

const Logo = styled.img`
  position: fixed;
  top: 50%;
  left: 3rem;
  width: 300px;
  border: 3px solid #73AD21;
`

const Logo2 = styled.img`
  position: fixed;
  top: 20%;
  left: 5rem;
  width: 300px;
  border: 3px solid #73AD21;
`

const Logo3 = styled.img`
  position: fixed;
  top: 30%;
  left: 20rem;
  width: 300px;
  border: 3px solid #73AD21;
`

const Logo4 = styled.img`
  position: fixed;
  top: 10%;
  left: 40rem;
  width: 300px;
  border: 3px solid #73AD21;
`

const Logo5 = styled.img`
  position: fixed;
  top: 25%;
  left: 30rem;
  width: 300px;
  border: 3px solid #73AD21;
`
