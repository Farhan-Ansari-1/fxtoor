import React from 'react';

const BrandName = ({ className }) => {
  // Pehle jaisa gradient style
  const gradientStyle = "font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600";
  
  return (
    <span className={className || gradientStyle}>
      fXtooR
    </span>
  );
};

export default BrandName;
