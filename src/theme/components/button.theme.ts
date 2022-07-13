import type { ComponentStyleConfig } from '@chakra-ui/react';

const ButtonTheme: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'none',
    fontWeight: 600,
    variant: 'solid',
  },
  variants: {
    solid: {
      bg: 'orange.400',
      color: 'white',
      _hover: {
        bg: 'orange.600',
      },
    },
    ghost: {
      bg: 'transparent',
      color: 'orange.400',
      _hover: {
        bg: 'orange.600',
      },
    },
  },
};

export default ButtonTheme;
