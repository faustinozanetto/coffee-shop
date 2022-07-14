import { Box, Image } from '@chakra-ui/react';
import type { IUserPresentationProps } from '@hooks/useImagePresentation';
import useImagePresentation from '@hooks/useImagePresentation';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

interface IPlaceImagePresentationProps {
  /* ID of the presentation */
  id: string;
  /* The customization of the presentation */
  presentation: Partial<IUserPresentationProps>;
}

const PlaceImagePresentation: React.FC<IPlaceImagePresentationProps> = (props) => {
  const { id, presentation } = props;
  const imageRef = useRef<HTMLImageElement>(null);
  const { currentImage } = useImagePresentation({
    delay: presentation.delay,
    images: presentation.images,
    loop: presentation.loop,
    imageRef,
  });

  return (
    <Box height="full" width="full">
      <motion.div
        key={currentImage + id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0, type: 'keyframes' }}
        style={{
          height: '100%',
        }}
      >
        <Image ref={imageRef} src={currentImage} objectFit="cover" objectPosition="center" width="100%" height="100%" />
      </motion.div>
    </Box>
  );
};

export default PlaceImagePresentation;
