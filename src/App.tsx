import React, { useRef, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './theme'
import { useOnClickOutside } from './hook'
import RandomNoonsong from './components/RandomNoonsong'
import About from './components/About'
import Burger from './components/Burger'
import Menu from './components/Menu'
import LandingPage from './components/LandingPage'
import ErrorPage from './components/ErrorPage'
import NSProfile from './components/MyNSProfile/NSProfile'

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

function App() {
  const [open, setOpen] = useState(false)
  const node = useRef<HTMLHeadingElement>(null)
  const menuId = 'main-menu'

  useOnClickOutside(node, () => setOpen(false))

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <TopContainer />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/random-noonsong' component={RandomNoonsong} />
          <Route exact path='/my-noonsong-profile' component={NSProfile} />
          <Route exact path='/about' component={About} />
          <Route path='*' component={ErrorPage} />
        </Switch>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
      </>
    </ThemeProvider>
  )
}

const TopContainer = styled.div`
  background: ${({ theme }) => theme.nsLabBlack};
  top: 0%;
  height: 3rem;
`
