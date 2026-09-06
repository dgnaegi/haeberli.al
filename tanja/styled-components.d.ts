import 'styled-components';
import { colors } from '@/src/styles/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
  }
}

