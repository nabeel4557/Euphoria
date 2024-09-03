import React from 'react';

function PrevArrow(props) {  // Added 'props' as a parameter
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#8A33FD',
        borderRadius: '50%',
        padding: '10px',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

export default PrevArrow;
