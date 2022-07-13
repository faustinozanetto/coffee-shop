import { extendTheme } from '@chakra-ui/react';
import ButtonTheme from './components/Button.theme';

export default extendTheme({
  components: {
    Button: ButtonTheme,
  },
});
