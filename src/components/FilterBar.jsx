import React from 'react';

export default function FilterBar({ category, setCategory, typeFilter, setTypeFilter, allCategories }) {
  return (
    <div className="flex gap-3 items-center">
      <select value={category} onChange={(e) => setCategory(e.target.value)}
        className="border rounded p-2 bg-white">
        {allCategories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
        className="border rounded p-2 bg-white">
        <option value="All">All</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
        <option value="Freemium">Freemium</option>
      </select>
    </div>
  );
}
