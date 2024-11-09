import React, { useRef } from 'react';
import "./Card.css";
import { motion, useScroll, useTransform } from 'framer-motion';

const Card = ({ title, description, src, link, color , i }) => {
  const { scrollYProgress } = useScroll();  // Removed the container reference for global scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]); // Adjust scale range if needed

  return (
    <div className='card-main-wrapper'>
      <motion.div className='card-wrapper' style={{ background: color, top :`calc(-5vh + ${i * 25}px)`}}>
        {/* Use motion.img for animation */}
        <motion.img 
          src={link} 
          alt="..." 
          style={{ scale }} 
        />
      </motion.div>
    </div>
  );
}

export default Card;
