import type React from 'react';
import { useEffect, useState } from 'react';

export interface IUserPresentationProps {
  /* The ref to the image element */
  imageRef: React.RefObject<HTMLImageElement>;
  /* The images to display */
  images: string[];
  /* The delay between images */
  delay: number;
  /* Whether to loop the presentation */
  loop: boolean;
}

/* Hook used for displaying an image presentation with some customization parameters */
const useImagePresentation = (presentation: IUserPresentationProps) => {
  const { imageRef, images, delay, loop } = presentation;
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  const switchImage = () => {
    // Loop functionallity.
    if (currentImageIndex === images.length - 1) {
      if (loop) setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Update image source on current change.
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = images[currentImageIndex];
    }
    setCurrentImage(images[currentImageIndex]);
  }, [currentImageIndex]);

  // Clear timer
  useEffect(() => {
    // Timer handle
    const timer = setInterval(switchImage, delay);

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex]);

  return { currentImage };
};

export default useImagePresentation;
