import React from 'react'
import { withSiteData } from 'react-static'
import { hot } from 'react-hot-loader'

import banner from 'assets/banner.svg'
import logo from 'assets/Logo.svg'
import styled, { css } from 'styled-components'
import {
  media,
  flex,
  typography,
  border,
  spacing
} from 'lfe/styles/traits/index'
import Button from '../components/Button'

import Headline from '../components/Headline'
import { containers } from '../lfe/styles/traits'

const BannerBackground = styled.header`
  position: absolute;
  z-index: -1;
  background: url('${banner}') no-repeat 50% 100% / cover;
  width: 100%;
  height: 50vw;
  max-height: 100vh;
  
  ${media.desktop} {
    min-height: 500px;
    height: 55vw;
  }
  
  ${media.tablet} {
    height: 60vw;
    min-height: 400px;
  }
`
const Main = styled.main`
  position: relative;
  z-index: 0;
  ${spacing.mt2_within};
`

const Nav = styled.nav`
  ${spacing.p1.ml1_within};
  ${flex.align_center};
  ${typography.f3.medium};
  color: white;
`

const Logo = styled.a.attrs({
  href: '/',
  children: <img src={logo} alt="Linc logo" />
})`
  > img {
    width: 7rem;
    position: relative;
    top: -2px; /*Aligning baselines*/
  }
  ${spacing.mra};
`

const SectionLink = styled.a`
  color: inherit;
  text-decoration: none;

  ${props =>
    props['hide-on-mobile'] &&
    css`
      ${media.phone} {
        display: none;
      }
    `};
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
  ${spacing.pb4};
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

const Features = styled.div`
  ${containers.content};
  ${spacing.mt15_within};
  ${flex.vertical.align_center};
`

const Feature = styled.div.attrs({
  children: ({ image, alt, headline, copy }) => (
    <React.Fragment>
      <div role="image" aria-label={alt} />
      <div>
        <h2>{headline}</h2>
        <p>{copy}</p>
      </div>
    </React.Fragment>
  )
})`
  ${flex.align_center};
  
  [role="image"] {
    ${spacing.mr3};
    background: url('${props => props.image}') no-repeat 50% 50% / contain;
    width: 12rem;
    height: 12rem;
    flex-shrink: 0;
  }
  
  h2 {
    ${typography.medium.f2.lh12};
    ${spacing.mb1};
  }
  
  p {
    ${typography.f4.lh14};
    max-width: 24rem;
  }
`

const Footer = styled.footer`
  background: url('${require('assets/footer.svg')}') no-repeat 50% 0% / cover;
  min-height: 8rem;
`

export default hot(module)(
  withSiteData(() => (
    <div>
      <BannerBackground />
      <Main>
        <Nav>
          <Logo />
          <SectionLink href="#features" hide-on-mobile>
            Features
          </SectionLink>
          <SectionLink href="#pricing">Pricing</SectionLink>
          <Button.A white href="https://app.linc.host">
            Sign in
          </Button.A>
        </Nav>
        <Headline />
        <PrScreenshot />
        <Features>
          <Feature
            image={require('assets/deploys.svg')}
            alt="Showing multiple versions of a single page"
            headline="Deploy continuously."
            copy="Production-ready deploys for every commit. Preview URLs to share your work instantly."
          />
          <Feature
            image={require('assets/release.svg')}
            alt="A person choosing the right version to release"
            headline="Release confidently."
            copy="Test in production yourself before releasing to your customers."
          />
          <Feature
            image={require('assets/host.svg')}
            alt="A computer connected to a server farm"
            headline="World-class hosting"
            copy="Performance and security baked-in: code splitting, a global CDN, server-side rendering & more."
          />
        </Features>
        <Footer />
      </Main>
    </div>
  ))
)
