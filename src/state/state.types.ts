export type CarouselsState = {
  /** Carousels data */
  data: CarouselState[];
};

export type CarouselState = {
  /** Carousel ID */
  id: string;
  /** Carousel data */
  current: number;
};

export type ProductSelectorState = {
  /* Selected product id */
  id: number;
};
