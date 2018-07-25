import styled, { css } from 'styled-components'
import { typography, spacing, border, backgrounds } from 'lfe/styles/traits'
import colors from 'lfe/styles/colors'

const Button = styled.button`
  display: inline-block;
  ${typography.inherit};
  ${spacing.pv1.ph2};
  ${border.bn.br2};
  ${backgrounds.gradient1};
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  color: white;
  
  ${ props => props.white && css`
    background: white;
    color: ${colors.bg_pink_dark};
  `}
`

Button.A = Button.withComponent('a')

export default Button
