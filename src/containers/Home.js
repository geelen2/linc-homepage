import React from 'react'
import { withSiteData } from 'react-static'
import { hot } from 'react-hot-loader'

import banner from 'assets/banner.svg'
import logo from 'assets/Logo.svg'
import styled from 'styled-components'
import { media, flex, containers, spacing } from 'lfe/styles/traits/index'
import Button from '../components/Button'

const Banner = styled.header`
  background: url('${banner}') no-repeat 50% 100%;
  background-size: cover;
  height: 50vw;
  max-height: 100vh;
  
  ${ media.desktop } {
    min-height: 500px;
    height: 55vw;
  }
  
  ${ media.tablet } {
    height: 60vw;
    min-height: 350px;
  }
`

const Nav = styled.nav`
  ${spacing.p1.ml1_within};
  ${flex.align_center};
  color: white;
`

const Logo = styled.a.attrs({
  href: '/',
  children: <img src={logo} alt="Linc logo" />
})`
  > img {
    width: 5rem;
  }
  ${spacing.mra};
`

const SectionLink = styled.a`
  color: inherit;
  text-decoration: none;
`

export default hot(module)(
  withSiteData(() => (
    <div>
      <Banner>
        <Nav>
          <Logo />
          <SectionLink href="#features">Features</SectionLink>
          <SectionLink href="#pricing">Pricing</SectionLink>
          <Button.A white href="https://app.linc.host">Sign in</Button.A>
        </Nav>
      </Banner>
    </div>
  ))
)
