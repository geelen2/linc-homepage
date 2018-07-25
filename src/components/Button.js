import styled from 'styled-components'
import { typography, spacing, border } from 'lfe/styles/traits'

const Button = styled.button`
  display: inline-block;
  ${typography.f5};
  ${spacing.pv066.ph2};
  ${border.bn.br1};
  text-decoration: none;
  transition: 200ms ease all;
  cursor: pointer;
  text-align: center;
`

Button.A = Button.withComponent('a')

export default Button
