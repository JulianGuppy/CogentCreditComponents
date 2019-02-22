import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme } from '../Tools/interpolation'

const Wrapper = styled.button.attrs(props => ({
    type: prop('type')
}))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  line-height: 1.5rem;
  width: ${prop('width')};
  padding: .375rem .75rem;
  box-sizing: border-box;
  color: ${theme('buttonColor')};
  background-color: ${theme('buttonBackgroundColor')};
  border: 1px solid #ffffff;
  border-radius: .25rem;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  outline: none;
  transition: all 0.3s ease 0s;
  opacity: ${(props) => props.disabled ? 0.5 : 1};
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  font-weight: 400;

  text-transform: uppercase !important;
  margin: 0 auto;
  margin-top: 1.5rem;

  &:hover {
    background-color: ${(props) => props.disabled ? theme('buttonBackgroundColor') : theme('buttonHoverColor')};
  }
`
const Button = ({ children, ...rest }) => (
    <Wrapper {...rest}>{children}</Wrapper>
)

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    width: PropTypes.string
}

Button.defaultProps = {
    disabled: false,
    type: 'button',
    width: '90%'
}

export default Button
