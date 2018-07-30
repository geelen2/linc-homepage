import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import { base } from 'lfe/styles/globals'
import fonts from 'assets/fonts'
import { typography } from 'lfe/styles/traits'

injectGlobal`
  ${base};
  ${fonts};
  
  body {
    font-family: Rubik, ${typography.system_font_stack};
    font-variant-ligatures: no-common-ligatures;
    font-feature-settings: "liga" off;
    ${ typography.regular };
  }
  
  strong {
    ${ typography.medium };
  }
`

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default hot(module)(App)
