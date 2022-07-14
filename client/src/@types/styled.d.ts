import themes from '../styles/themes/default'

type ThemeType = typeof themes

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}