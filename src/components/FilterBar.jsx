import React from 'react';

const defaultTypeFilters = ['All', 'Free', 'Paid', 'Freemium'];

export default function FilterBar({
  category, setCategory, allCategories,
  typeFilter, setTypeFilter, allTypeFilters = defaultTypeFilters,
}) {
  return (
    <div className="flex gap-3 items-center">
      <select value={category} onChange={(e) => setCategory(e.target.value)}
        className="border rounded p-2 bg-white">
        {allCategories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
      </select>

      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
        className="border rounded p-2 bg-white">
        {allTypeFilters.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
