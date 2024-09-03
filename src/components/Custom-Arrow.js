import React from 'react';

// Custom Next Arrow
function NextArrow(props) {
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

// Custom Previous Arrow
function PrevArrow(props) {
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
