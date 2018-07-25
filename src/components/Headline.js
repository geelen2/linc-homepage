import React from 'react'
import styled from 'styled-components'
import { typography, spacing, flex, media } from '../lfe/styles/traits'

const Wrapper = styled.div`
  ${spacing.p1.pt4};
  
  ${ media.tablet } {
    text-shadow: 0 1px 3px black;
  }
`

const Big = styled.div`
  ${ typography.medium.condensed };
  ${ spacing.mb2 };
  line-height: 1.2;
  
  font-size: 6vw;
  ${ media.tablet } {
    font-size: 3rem;
  }
`

const Small = styled.div`
  ${ typography.f4 };
  ${ spacing.mb2 };
  line-height: 1.4;
`

export default () => (
  <Wrapper>
    <Big>
      Deploy instantly.<br />
      Release confidently.
    </Big>
    <Small>
      Production-ready reploys for every PR.<br />
      Merge & release with a click.
    </Small>
  </Wrapper>
)
