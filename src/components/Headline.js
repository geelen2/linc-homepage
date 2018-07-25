import React from 'react'
import styled from 'styled-components'
import { typography, spacing, flex } from '../lfe/styles/traits'

const Wrapper = styled.div`
  ${spacing.p1.pt4};
`

const Big = styled.div`
  ${ typography.f0.medium.condensed };
`

const Small = styled.div`
  ${ typography.f4 };
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
