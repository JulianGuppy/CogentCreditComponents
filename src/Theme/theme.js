/* eslint-disable sort-keys */
import { darken } from 'polished'
import palette from './palette'

const theme = {
    palette,
    fontPrimary: "'Roboto', sans-serif",
    screenSizes: {
        sm: '48rem',
        md: '62rem',
        lg: '75rem'
    },
    buttonBackgroundColor: palette.transparent,
    buttonColor: palette.white,
    /* buttonHoverColor: darken(0.05, palette['crimson']), */
    textColor: palette.black80,
    inputColor: palette.black70,
    dangerColor: palette.red,
    inputBorderColor: palette.lightgray,
    inputBorderRadius: '0.25rem',
    inputBackgroundColor: palette.white,
    inputBackgroundColorDisabled: palette.grey000,
    inputPlaceholderColor: palette.grey300
}

export default theme
/* eslint-enable sort-keys */
