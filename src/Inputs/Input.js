import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme } from '../Tools/interpolation'

const Wrapper = styled.input`
    display: block;
    height: 2.7rem;
    width: ${prop('width')};
    padding: 0 1rem;
    box-sizing: border-box;
    font-family: ${theme('fontPrimary')};
    font-size: 1rem;
    color: ${theme('inputColor')};
    border-width: 1px;
    border-color: ${(props) =>
        props.error != null
            ? theme('dangerColor')(props)
            : theme('inputBorderColor')(props)};
    border-style: solid;
    border-radius: ${theme('inputBorderRadius')};
    background-color: ${theme('inputBackgroundColor')};
    background-image: none;
    outline-width: 0;
    user-select: text;
    transition: box-shadow 0.25s ease-out;
`

const Input = ({ children, ...rest }) => (
    <Wrapper {...rest}>{children}</Wrapper>
)

Input.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    e2e: PropTypes.string,
    error: PropTypes.string,
    input: PropTypes.object,
    label: PropTypes.string,
    name: PropTypes.string,
    renderSuffix: PropTypes.func,
    type: PropTypes.oneOf([
        'text'
    ]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.string
}

Input.defaultProps = {
    disabled: false,
    e2e: 'defaultInput',
    type: 'text',
    width: '100%'
}

export default Input
