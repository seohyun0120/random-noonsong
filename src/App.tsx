import React, { useRef, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './theme'
import { useOnClickOutside } from './hook'
import RandomNoonsong from './components/RandomNoonsong'
import About from './components/About'
import Burger from './components/Burger'
import Menu from './components/Menu'

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
        <Route exact path='/' component={RandomNoonsong} />
        <Route exact path='/about' component={About} />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
      </>
    </ThemeProvider>
  )
}
