import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  className: string;
  isAnimating: boolean;
  onClose: () => void;
}

const Portal: React.FC<Props> = ({ children, className = '', isAnimating, onClose }) => {
  const portal = document.getElementById('portal');
  const classes = `z-20 fixed w-1/2 top-0 left-0 rounded-lg shadow-lg bg-white ${className}`;
  return (
    portal && (
      <>
        {createPortal(
          <motion.div
            className="z-10 fixed top-0 left-0 right-0 bottom-0 bg-black/30"
            initial={{ opacity: 0, visibility: 'hidden' }}
            animate={{
              opacity: isAnimating === true ? 1 : 0,
              visibility: isAnimating === true ? 'visible' : 'hidden',
            }}
            transition={{ duration: 1 }}
            onClick={onClose}
          ></motion.div>,
          portal
        )}
        {createPortal(
          <motion.div
            className={classes}
            initial={{
              opacity: 0,
              visibility: 'hidden',
              y: '50%',
              x: '50%',
            }}
            animate={{
              y: isAnimating ? 100 : 0,
              opacity: isAnimating === true ? 1 : 0,
              visibility: isAnimating === true ? 'visible' : 'hidden',
            }}
            transition={{
              type: 'spring',
              stiffness: 65,
              damping: 5,
              duration: 2,
            }}
          >
            {children}
          </motion.div>,
          portal
        )}
      </>
    )
  );
};

export default Portal;
