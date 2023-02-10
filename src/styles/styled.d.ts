import "styled-components";
import { ColorsTypes } from "./theme";

declare module 'styled-components' {
    export interface DefaultTheme {
        bgColors : string
        textColors : string
        btnColor: string
        accentColor: string
    }
}
