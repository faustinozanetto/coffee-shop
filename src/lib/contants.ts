import type { ProductBuyType } from '@modules/buy/types/buy-card.types';
import type { ProductDetailsType } from '@modules/product/types/product-details.types';

export const images: string[] = [
  'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&w=1000&q=80',
  'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1545418314-7ce0b9b53901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1494346480775-936a9f0d0877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1542372147193-a7aca54189cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1511667282954-8957078364a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1516197227520-4d1c419f6ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1564849744694-348ecd00c279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
];

export const BUY_PRODUCTS: ProductBuyType[] = [
  {
    id: 1,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1605711599412-775918dbe770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwYmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1611854778863-0c4d1bae5a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvZmZlZSUyMGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1512585285324-1649f5fd2c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxjb2ZmZWUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1519082274554-1ca37fb8abb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxjb2ZmZWUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1623088188177-50d2c3a75002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxjb2ZmZWUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    name: 'Strong Coffee',
    price: 15.99,
    thumbnail:
      'https://images.unsplash.com/photo-1613410034014-18cc91dc1e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxjb2ZmZWUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

export const PRODUCTS: ProductDetailsType[] = [
  {
    id: 1,
    thumbnail:
      'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Macchiato',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 2,
    thumbnail:
      'https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Cappuccino',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 3,
    thumbnail:
      'https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    name: 'Espresso',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 4,
    thumbnail:
      'https://images.unsplash.com/photo-1562447457-579fc34967fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Cold',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 5,
    thumbnail:
      'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Americano',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },

  {
    id: 6,
    thumbnail:
      'https://images.unsplash.com/photo-1577590835286-1cdd24c08fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Latte',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam. Optio illo voluptate perspiciatis rer mollitia autem, odit assumenda ipsam minima aliquid fuga, corporis adipisci.',
  },
];
