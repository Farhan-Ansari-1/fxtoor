import React, { useState, useMemo, useEffect } from 'react';
import SearchBar from './../components/SearchBar';
import FilterBar from './../components/FilterBar';
import ToolList from './../components/ToolList';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  // Loading, error, aur data states
  const [allTools, setAllTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [subCategoryFilter, setSubCategoryFilter] = useState('All');

  // Jab bhi main category badle, sub-category ko reset kar dein.
  // Isse UI mein ek saath update hoga aur extra re-render bachega.
  const handleCategoryChange = (newCategory) => {
    setCategoryFilter(newCategory);
    setSubCategoryFilter('All');
  };

  // Data fetch karne ke liye useEffect
  useEffect(() => {
    const fetchTools = async () => {
      try {
        // tools.json ko public folder se fetch karein
        const response = await fetch('/tools.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllTools(data);
      } catch (e) {
        setError(e.message);
        console.error("Error fetching tools.json:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []); // Empty dependency array ensures this runs only once on mount

  const { filteredTools, allCategories, allSubCategories, allTypes } = useMemo(() => {
    if (!Array.isArray(allTools) || allTools.length === 0) return { filteredTools: [], allCategories: ['All'], allSubCategories: ['All'], allTypes: ['All'] };

    // Sabse important step: Data ko saaf karna (Data Sanitization).
    // Hum sirf unhi tools ko aage bhejenge jo ek object hain aur jinka 'name' hai.
    // Isse crash hone ka chance bilkul khatam ho jaayega.
    // Hum 'id' aur 'name' dono check karenge taaki app crash na ho.
    const validTools = allTools.filter(tool => tool && typeof tool === 'object' && tool.name);

    // 1. Get all main categories from the full, valid list
    const categories = ['All', ...new Set(validTools.map(t => t.mainCategory).filter(Boolean))];

    // Get all unique types from the full, valid list
    const allTypes = ['All', ...new Set(validTools.map(t => t.type).filter(Boolean))];

    // 2. Start filtering by main category
    let partiallyFilteredTools = validTools;
    if (categoryFilter !== 'All') {
      partiallyFilteredTools = partiallyFilteredTools.filter(t => t.mainCategory === categoryFilter);
    }

    // 3. Get available sub-categories from the already-filtered list
    const subCategories = ['All', ...new Set(partiallyFilteredTools.map(t => t.subCategory).filter(Boolean))];

    // 4. Continue filtering by sub-category and type
    let finalFilteredTools = partiallyFilteredTools;
    if (subCategoryFilter !== 'All') {
      finalFilteredTools = finalFilteredTools.filter(t => t.subCategory === subCategoryFilter);
    }

    if (typeFilter !== 'All') {
      finalFilteredTools = finalFilteredTools.filter(t => t.type === typeFilter);
    }

    // 5. Aakhir mein, search query se filter karein
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      finalFilteredTools = finalFilteredTools.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        (tool.description && tool.description.toLowerCase().includes(query))
      );
    }

    return { filteredTools: finalFilteredTools, allCategories: categories, allSubCategories: subCategories, allTypes: allTypes };
  }, [allTools, categoryFilter, typeFilter, subCategoryFilter, searchQuery]);

  if (loading) {
    return <div className="text-center text-xl text-gray-500 py-10">Loading tools...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500 py-10">Error fetching tools: {error}</div>;
  }

  // Ek aur suraksha check: Jab tak data load na ho, kuch render na karein.
  // Yeh "uncaught runtime error" se bachne ka sabse accha tarika hai.
  if (!filteredTools) {
    return null; // Ya ek loading indicator dikha sakte hain
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Control Bar ko thoda saaf-suthra banayein */}
      <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-auto md:flex-grow lg:flex-grow-0 lg:w-1/3">
            <SearchBar query={searchQuery} setQuery={setSearchQuery} />
          </div>
          <div className="w-full md:w-auto">
            <FilterBar
            category={categoryFilter}
            setCategory={handleCategoryChange} // Naya handler pass karein
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            subCategory={subCategoryFilter}
            setSubCategory={setSubCategoryFilter}
            allSubCategories={allSubCategories}
            allCategories={allCategories}
            allTypeFilters={allTypes}
          />
          </div>
        </div>
      </div>
      {/* Ab ToolList ko sirf filtered tools pass karein */}
      <ToolList tools={filteredTools} />
    </div>
  );
}