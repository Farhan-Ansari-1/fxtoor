import React from 'react';

const ToolCard = ({ name, description, link, tag }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      margin: '10px',
      borderRadius: '10px',
      maxWidth: '400px'
    }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Visit Site</a>
      <div style={{ marginTop: '8px', fontWeight: 'bold' }}>{tag}</div>
    </div>
  );
};

export default ToolCard;
