import React from 'react';

// Is constant ko component ke bahar define karna behtar hai.
const defaultTypeFilters = ['All', 'Free', 'Paid', 'Freemium'];

export default function FilterBar({
  category, setCategory, allCategories,
  subCategory, setSubCategory, allSubCategories,
  typeFilter, setTypeFilter, allTypeFilters = defaultTypeFilters,
}) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <select value={category} onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {allCategories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
      </select>

      {/* Conditionally render the sub-category filter */}
      {category !== 'All' && allSubCategories && allSubCategories.length > 1 && (
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="border rounded-lg p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          {allSubCategories.map((sub) => <option key={sub} value={sub}>{sub}</option>)}
        </select>
      )}

      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
        className="border rounded-lg p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {allTypeFilters.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
