import React from 'react';

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="flex-1">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tools by name or keyword (e.g., 'chat', 'endpoint')"
        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>
  );
}
