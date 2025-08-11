import React from 'react';
import ToolList from './components/ToolList';// ✅ Make sure path is correct
import tools from './data/tools';  // ✅ Correct import path

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to fxtoor 🚀</h1>
      <p>This will be your custom tool directory for AI & cybersecurity tools.</p>

      {/* ✅ Render ToolList and pass tools as props */}
      <ToolList tools={tools} />
    </div>
  );
}

export default App;
