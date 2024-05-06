import React, { useState } from 'react';

function SortBar({ sortBy, onSortChange }) {
  const [selectedSort, setSelectedSort] = useState(sortBy || null); // Initialize with current sort value

  const handleSortChange = (e) => {
    const newSortCriteria = e.target.value;
    setSelectedSort(newSortCriteria);
    onSortChange(newSortCriteria); // Trigger the sorting logic in parent component
  };

  return (
    <div className="sort-bar">
      <span>Sort by:</span>
      <select value={selectedSort} onChange={handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default SortBar;