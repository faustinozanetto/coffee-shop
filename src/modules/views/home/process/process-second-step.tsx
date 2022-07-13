import { motion } from 'framer-motion';
import React from 'react';

interface IProcessSecondStep {}

const ProcessSecondStep: React.FC<IProcessSecondStep> = ({}) => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -100, opacity: 0 },
      }}
    >
      <div className="grid grid-cols-1 grid-rows-2 py-4 h-max w-full md:grid-cols-2 md:grid-rows-1 md:py-8 md:h-80">
        {/* Left Content */}
        <div className="flex mr-6 w-full">
          <div
            className="bg-cover bg-center w-full"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1537130508299-46ab547b4be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)',
            }}
          />
        </div>
        {/* Right Content */}
        <div className="ml-6">
          <div className="py-4">
            <h2 className="font-semibold text-5xl text-gray-900 mb-2">Step 2</h2>
            <span className="font-bold text-xl text-gray-900 text-left">Grind the beans</span>
            <p className="font-normal text-xl text-gray-900 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia est vero eius consequuntur suscipit!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProcessSecondStep;
