import React from 'react'
import { withSiteData } from 'react-static'
import { hot } from 'react-hot-loader'

import banner from 'assets/banner.svg'
import logo from 'assets/Logo.svg'
import styled from 'styled-components'
import {
  media,
  flex,
  typography,
  border,
  spacing
} from 'lfe/styles/traits/index'
import Button from '../components/Button'

import Headline from '../components/Headline'

const BannerBackground = styled.header`
  position: absolute;
  z-index: -1;
  background: url('${banner}') no-repeat 50% 100%;
  background-size: cover;
  width: 100%;
  height: 50vw;
  max-height: 100vh;
  
  ${media.desktop} {
    min-height: 500px;
    height: 55vw;
  }
  
  ${media.tablet} {
    height: 60vw;
    min-height: 350px;
  }
`
const Main = styled.main`
  position: relative;
  z-index: 0;
  color: white;
`

const Nav = styled.nav`
  ${spacing.p1.ml1_within};
  ${flex.align_center};
  ${typography.f4.medium};
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

const PrScreenshot = styled.div.attrs({
  children: (
    <div role="image" aria-label={'Linc in action on a GitHub Pr'}>
      <svg viewBox="0 0 1100 1182" />
      <div data-preview />
      <div data-image />
    </div>
  )
})`
  ${flex.center};
  ${spacing.pb4.mb2};
  background: url('${require('../assets/cityscape-background.svg')}') repeat no-repeat 50% 100% / auto 300px;
  ${media.tablet} {
    background-size: auto 200px;
  }
  
  > div {
    width: calc(100vw - 4rem);
    max-width: 550px;
    box-shadow: 0 4px 50px rgba(0, 0, 0, 0.5);
    ${border.br3};
    position: relative;
    overflow: hidden;
    
    > svg {
      width: 100%;
    }
    
    > div {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    > [data-preview] {
      background: url('${require('assets/pr-screenshot-preview.svg')}') no-repeat 50% 50% / cover;
    }
    > [data-image] {
      background: url('${require('assets/pr-screenshot-smaller.png')}') no-repeat 50% 50% / cover;
    }
  }
`

export default hot(module)(
  withSiteData(() => (
    <div>
      <BannerBackground />
      <Main>
        <Nav>
          <Logo />
          <SectionLink href="#features">Features</SectionLink>
          <SectionLink href="#pricing">Pricing</SectionLink>
          <Button.A white href="https://app.linc.host">
            Sign in
          </Button.A>
        </Nav>
        <Headline />
        <PrScreenshot />

      </Main>
    </div>
  ))
)
