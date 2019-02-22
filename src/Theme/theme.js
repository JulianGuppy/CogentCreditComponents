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
    inputColor: palette.black80,
    dangerColor: palette.red,
    inputBorderColor: palette.gray,
    inputBorderRadius: '0.255rem',
    inputBackgroundColor: palette.white
}

export default theme
/* eslint-enable sort-keys */
