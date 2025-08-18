// src/components/SkeletonCard.jsx
import React from "react";

export default function SkeletonCard() {
  return (
    <div className="border dark:border-gray-700 rounded-lg p-4 shadow-sm animate-pulse bg-white dark:bg-gray-800">
      {/* Image Placeholder */}
      <div className="h-40 w-full bg-gray-300 dark:bg-gray-700 rounded-md mb-4"></div>

      {/* Title Placeholder */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>

      {/* Description Placeholder */}
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full mb-1"></div>
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>

      {/* Button Placeholder */}
      <div className="mt-4 h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
  );
}
