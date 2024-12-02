import React from 'react'
import { motion } from 'motion/react';

const CustomButton = ({ value, icon, righticon, onclick, tailwindclass }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.10 }}
      whileTap={{ scale: 0.85 }}
      onClick={onclick}
      className={`p-2 px-3 li:text-lg flex justify-center items-center gap-2 bg-indigo-600 font-semibold text-white rounded-xl hover:bg-indigo-700 ${tailwindclass}`}
      aria-label={value} // Accessibility improvement
    >
      {icon && <span className=' text-2xl'>{icon}</span>}
      {value && <span>{value}</span>}
      {righticon && <span>{righticon}</span>}
    </motion.button>
  );
};

export default CustomButton