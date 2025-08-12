import React from 'react';

// A component to consistently display the brand name.
// It allows for special styling of the 'X' and 'R' characters.
export default function BrandName({ className = '' }) {
  // The font-serif is just an example for a different font.
  // You can change it to any other font family you have configured.
  const specialCharStyle = "font-serif";

  return (
    <span className={className}>
      f<span className={specialCharStyle}>X</span>too<span className={specialCharStyle}>R</span>
    </span>
  );
}