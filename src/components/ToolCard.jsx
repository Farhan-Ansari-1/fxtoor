import React from 'react';

export default function ToolCard({ name, description, mainCategory, subCategory, link, type }) {
  // Pura category string display ke liye banayein.
  // Agar subCategory hai, to "Main - Sub" dikhayein, warna sirf "Main".
  const displayCategory = subCategory ? `${mainCategory || 'Category'} - ${subCategory}` : mainCategory || 'Uncategorized';

  // Color logic ke liye mainCategory ka istemaal karein.
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
    <div className={`group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-t-4 ${borderColor} overflow-hidden`}>
      {/* Visit button ko top-right corner me rakhein, jo hover par dikhega */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label={`Visit ${name}`}>
          Visit
        </a>
      )}
      <div className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          {/* Title ke right me thodi jagah chhod dein taaki button se na takraye */}
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors pr-16">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">{description}</p>
        </div>
        <div className="mt-auto pt-4 flex justify-between items-center text-xs">
          {/* Naya displayCategory string istemaal karein */}
          <span className={`font-semibold px-2 py-1 rounded-full ${bgColor} ${textColor}`}>{displayCategory}</span>
          {type && <span className={`font-bold px-2 py-1 rounded-full ${typeColorClass}`}>{type}</span>}
        </div>
      </div>
    </div>
  );
}