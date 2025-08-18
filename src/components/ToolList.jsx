import React from 'react';
import ToolCard from './ToolCard';

export default function ToolList({ tools }) {
  if (!tools || tools.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-10">
        <h2 className="text-2xl font-bold mb-2">No Tools Found</h2>
        <p>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {tools.map(tool => (
        <ToolCard key={tool.id} {...tool} />
      ))}
    </div>
  );
}