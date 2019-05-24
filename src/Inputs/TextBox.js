import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin: 1.5rem !important;
`;

const Label = styled.label`
    font-family: 'Roboto', sans-serif !important;
    font-weight: 500 !important;
    font-size: 0.95rem !important;
    color: #666666 !important;
`;

const Wrapper = styled.input`
    display: block !important;
    width: 100% !important;
    padding: 0.375rem 0.75rem !important;
    font-size: 1rem !important;
    font-weight: 400 !important;
    line-height: 1.5 !important;
    color: rgba(0,0,0,0.70) !important;
    background-color: #FFFFFF !important;
    background-clip: padding-box !important;
    border-width: 1px !important;
    border-style: solid !important;
    border-color: #D3D3D3 !important;
    border-radius: 0.25rem !important;
    overflow: visible !important;
    margin: 0 !important;
    font-family: 'Roboto', sans-serif !important;
    box-sizing: border-box !important;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
    background-image: none !important;
    outline-width: 0 !important;

    &:disabled {
        background: #F0F2F7 !important;
        cursor: not-allowed !important;
    }

    &:focus {
        border-color: rgba(108, 133, 165, 0.9) !important;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 10px rgba(108, 133, 165, 0.2) !important;
    }

    &::placeholder {
        color: #B1B8C7 !important;
    }

    &.is-invalid {
        border-color: #dc3545 !important;
    }
    
    &.is-invalid:focus {
        box-shadow: 0 1px 1px rgba(220, 53, 69, 0.25) inset, 0 0 10px rgba(220, 53, 69, 0.25) !important;
    }
`;

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.myRef = React.createRef();

        this.formChange = props.input.onChange;

        this.preserveCursor = this.preserveCursor.bind(this);
        this.setCursor = this.setCursor.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate() {
        this.setCursor();
    }

    setCursor() {
        let selectionStart = this.state.selectionStart;

        if (this.state.oldValue && this.props.input.value) {
            let valueLengthDifference = this.state.oldValue.length - this.props.input.value.length;
            selectionStart = selectionStart - valueLengthDifference;
        }

        this.myRef.current.setSelectionRange(
            selectionStart,
            selectionStart
        );
    }

    preserveCursor() {
        this.setState({
            oldValue: this.myRef.current.value,
            selectionStart: this.myRef.current.selectionStart
        });
    }

    handleChange(event) {
        this.preserveCursor();
        this.formChange(event);
    }

    render() {
        const {
            input,
            className,
            label,
            required,
            meta: { touched, error },
            ...rest
        } = this.props;

        if (label != null) {
            return (
                <Container className="form-group">
                    <Label htmlFor={rest.id}>{label}</Label>
                    <Wrapper type="text" ref={this.myRef} className={`form-control ${touched && error ? 'is-invalid' : ''} ${className || ''}`} {...input} onChange={this.handleChange} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" {...rest} />
                    <div className="invalid-feedback">
                        {error}
                    </div>
                </Container>
            );
        }

        return (
            <Container className="form-group">
                <Wrapper type="text" ref={this.myRef} className={`form-control ${touched && error ? 'is-invalid' : ''} ${className || ''}`} {...input} onChange={this.handleChange} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" {...rest} />
                <div className="invalid-feedback">
                    {error}
                </div>
            </Container>
        );
    }
}

TextBox.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    invalidMessage: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
};

export default TextBox;
