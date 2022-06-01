import { useState } from 'react';

const useCarousel = (maxItems: number) => {
  const [current, setCurrent] = useState(0);

  const incrementIndex = () => {
    const idx = current;
    setCurrent(current + 1 === maxItems ? idx : current + 1);
  };

  const decrementIndex = () => {
    const idx = 0;
    setCurrent(current - 1 < 0 ? idx : current - 1);
  };

  return { current, incrementIndex, decrementIndex };
};

export default useCarousel;
