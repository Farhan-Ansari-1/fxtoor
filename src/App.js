import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import SearchBar from './components/searchBar.jsx';
import FilterBar from './components/FilterBar.jsx';
import ToolList from './components/ToolList.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allTools, setAllTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch('/tools.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllTools(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTools();
  }, []); // Empty dependency array means this effect runs once on mount

  const { filteredTools, allCategories } = useMemo(() => {
    if (!allTools.length) {
      return { filteredTools: [], allCategories: ['All'] };
    }

    const categories = ['All', ...new Set(allTools.map(t => t.category.split(' - ')[0]))];

    let tools = allTools;

    if (categoryFilter !== 'All') {
      tools = tools.filter(t => t.category.startsWith(categoryFilter));
    }

    if (typeFilter !== 'All') {
      tools = tools.filter(t => t.type === typeFilter);
    }

    return { filteredTools: tools, allCategories: categories };
  }, [allTools, categoryFilter, typeFilter]);

  const renderContent = () => {
    if (loading) {
      return <div className="text-center text-xl text-gray-500">Loading tools...</div>;
    }
    if (error) {
      return <div className="text-center text-xl text-red-500">Error fetching tools: {error}</div>;
    }
    return <ToolList tools={filteredTools} searchQuery={searchQuery} />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <SearchBar query={searchQuery} setQuery={setSearchQuery} />
            <FilterBar
              category={categoryFilter}
              setCategory={setCategoryFilter}
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
              allCategories={allCategories}
            />
          </div>
        </div>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
