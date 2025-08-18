import React from 'react';

export default function FilterBar({
  category, setCategory, allCategories,
  subCategory, setSubCategory, allSubCategories,
  typeFilter, setTypeFilter, allTypeFilters,
}) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-start md:justify-end">
      {/* Accessibility ke liye har filter ke saath label joda gaya hai */}
      <div className="flex flex-col">
        <label htmlFor="category-filter" className="sr-only">Category</label>
        <select id="category-filter" value={category} onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
          {Array.isArray(allCategories) && allCategories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      {/* Conditionally render the sub-category filter */}
      {allSubCategories && allSubCategories.length > 1 && (
        <div className="flex flex-col">
          <label htmlFor="subcategory-filter" className="sr-only">Sub-Category</label>
          <select
            id="subcategory-filter"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="border rounded-lg p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {Array.isArray(allSubCategories) && allSubCategories.map((sub) => <option key={sub} value={sub}>{sub}</option>)}
          </select>
        </div>
      )}

      <div className="flex flex-col">
        <label htmlFor="type-filter" className="sr-only">Type</label>
        <select id="type-filter" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded-lg p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
          {Array.isArray(allTypeFilters) && allTypeFilters.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>
    </div>
  );
}
