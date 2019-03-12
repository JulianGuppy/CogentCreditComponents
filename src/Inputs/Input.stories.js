import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'

storiesOf('Input', module)
    .add('default', () => <Input name="Test" />)
    .add('with disabled', () => <Input disabled />)
    .add('with invalid', () => <Input invalid />)
    .add('with placeholder', () => <Input placeholder="placeholder" />)
