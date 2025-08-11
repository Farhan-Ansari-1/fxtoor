import React from 'react';

export default function ToolCard({ name, description, category, link, type }) {
  const mainCategory = category.split(' - ')[0];

  const categoryColors = {
    'AI': 'bg-blue-100 text-blue-800 border-blue-500',
    'Cybersecurity': 'bg-purple-100 text-purple-800 border-purple-500',
    'default': 'bg-blue-100 text-blue-800 border-blue-500'
  };

  const typeColors = {
    'Free': 'bg-green-200 text-green-900',
    'Paid': 'bg-red-200 text-red-900',
    'Freemium': 'bg-yellow-200 text-yellow-900'
  };

  const colorClasses = categoryColors[mainCategory] || categoryColors.default;
  const [bgColor, textColor, borderColor] = colorClasses.split(' ');

  const typeColorClass = typeColors[type] || '';

  return (
    <div className={`group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-t-4 ${borderColor}`}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{name}</h3>
          <p className="text-gray-600 mb-4 h-20 text-sm">{description}</p>
        </div>
        <div className="mt-auto pt-4 flex justify-between items-center text-xs">
          <span className={`font-semibold px-2 py-1 rounded-full ${bgColor} ${textColor}`}>{category}</span>
          <div className="flex items-center gap-2">
            {type && <span className={`font-bold px-2 py-1 rounded-full ${typeColorClass}`}>{type}</span>}
            {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-semibold transition-colors">Visit &rarr;</a>}
          </div>
        </div>
      </div>
    </div>
  );
}