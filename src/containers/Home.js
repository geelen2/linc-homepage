import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import styled from 'styled-components'
import { typography } from 'linc-front-end/src/styles/traits/index'

const H1 = styled.h1`
  ${ typography.f1.positive };
`

export default withSiteData(() => (
  <div>
    <H1>Welcome to</H1>
    <img src={logoImg} alt="" />
  </div>
))
