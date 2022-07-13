import { extendTheme } from '@chakra-ui/react';
import ButtonTheme from './components/button.theme';

export default extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  components: {
    Button: ButtonTheme,
  },
});
