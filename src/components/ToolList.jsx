import React, { useMemo } from 'react';
import ToolCard from './ToolCard';
import Fuse from 'fuse.js';
import { motion } from 'framer-motion';

export default function ToolList({ tools, searchQuery }) {
  const fuse = useMemo(() => {
    if (!tools || tools.length === 0) return null;
    return new Fuse(tools, {
      keys: ['name', 'description', 'category', 'type'],
      threshold: 0.35
    });
  }, [tools]);

  const results = useMemo(() => {
    if (!searchQuery) return tools;
    if (!fuse) return tools.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return fuse.search(searchQuery).map(r => r.item);
  }, [tools, searchQuery, fuse]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {results && results.length ? results.map((t) => (
        <motion.div key={t.name} variants={itemVariants}>
          <ToolCard {...t} />
        </motion.div>
      ))
        : <div className="text-gray-500 col-span-full">No tools found.</div>}
    </motion.div>
  );
}
