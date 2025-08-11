import React from 'react';

function ToolList({ tools }) {
  return (
    <ul>
      {tools.map((tool, index) => (
        <li key={index}>
          <a href={tool.link} target="_blank" rel="noopener noreferrer">
            <strong>{tool.name}</strong>: {tool.description} ({tool.type})
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ToolList;
