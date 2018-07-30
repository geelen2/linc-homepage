import React from 'react'
import styled from 'styled-components'
import { typography, spacing, flex, media } from '../lfe/styles/traits'

const Wrapper = styled.div`
  ${spacing.pt2.mha.pb2};
  width: calc(100vw - 4rem);
  max-width: 1580px;
  color: white;
  
  ${ media.tablet } {
    text-shadow: 0 1px 3px black;
    ${spacing.pl1};
  }
`

const Big = styled.h1`
  ${ typography.medium.condensed };
  ${ spacing.mb2 };
  line-height: 1.2;
  
  font-size: 6vw;
  ${ media.tablet } {
    font-size: 3rem;
  }
  ${ media.giant } {
    font-size: 5rem;
  }
`

const Small = styled.p`
  line-height: 1.4;
  width: 27em;
  font-size: 2.1vw;
  
  ${ media.tablet } {
    ${ typography.f4 };
    width: 20em;
  }
  ${ media.giant } {
    font-size: 2.5rem;
  }
`

export default () => (
  <Wrapper>
    <Big>
      We automate.<br />
      You iterate.
    </Big>
    <Small>
      Taking the friction out of releasing front-end applications
      so you can focus on <strong>delighting your customers.</strong>
    </Small>
  </Wrapper>
)
