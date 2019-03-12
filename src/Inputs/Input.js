import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme } from '../Tools/interpolation'

const Wrapper = styled.input`
    display: block;
    width: ${prop('width')};
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme('inputColor')};
    background-color: ${theme('inputBackgroundColor')};
    background-clip: padding-box;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
        props.invalid
            ? theme('dangerColor')(props)
            : theme('inputBorderColor')(props)};
    border-radius: ${theme('inputBorderRadius')};
    overflow: visible;
    margin: 0;
    font-family: ${theme('fontPrimary')};
    box-sizing: border-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    background-image: none;
    outline-width: 0;

    &:disabled {
        background: ${theme('inputBackgroundColorDisabled')};
        cursor: not-allowed;
    }

    &:focus {
        border-color: rgba(108, 133, 165, 0.9);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 10px rgba(108, 133, 165, 0.2);
    }

    &::placeholder {
        color: ${theme('inputPlaceholderColor')};
    }
`

const Input = ({ children, ...rest }) => (
    <Wrapper autocomplete="nope" autocorrect="off" spellcheck="false" {...rest}>{children}</Wrapper>
)

Input.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
//    input: PropTypes.object,
//    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf([
        'text'
    ]),
    value: PropTypes.string,
    width: PropTypes.string
}

Input.defaultProps = {
    type: 'text',
    width: '100%'
}

export default Input
