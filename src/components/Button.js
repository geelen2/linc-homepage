import styled, { css } from 'styled-components'
import { typography, spacing, border, backgrounds } from 'lfe/styles/traits'

const Button = styled.button`
  display: inline-block;
  ${typography.f5};
  ${spacing.pv066.ph2};
  ${border.bn.br1};
  ${backgrounds.gradient1};
  text-decoration: none;
  transition: 200ms ease all;
  cursor: pointer;
  text-align: center;
  color: white;
  
  ${ props => props.white && css`
    //background: white;
    color: inherit;
  `}
`

Button.A = Button.withComponent('a')

export default Button
