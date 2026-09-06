import 'styled-components';
import type { colors as appColors } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof appColors;
  }
}


