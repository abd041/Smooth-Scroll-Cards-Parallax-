import React, { useRef } from 'react';
import "./Card.css";
import { motion, useScroll, useTransform } from 'framer-motion';

const Card = ({ title, description, src, link, color , i }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    container: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className='card-main-wrapper' ref={container}>
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
