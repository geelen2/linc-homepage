import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import { base } from 'lfe/styles/globals'

injectGlobal`
  ${base};
`

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default hot(module)(App)
