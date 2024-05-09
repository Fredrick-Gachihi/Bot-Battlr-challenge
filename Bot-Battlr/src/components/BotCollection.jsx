import { useState } from "react";

function BotCollection({ onEnlist }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [ error,setError ] =useState([])
  return (
    <div className="bot-collection">
      <SearchBar onSearchChange={handleSearchChange} />

      <FilterBar
        filters={["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]}
        selectedFilters={selectedFilters}
        onFilterChange={setSelectedFilters}
      />

      <SortBar sortBy={sortBy} onSortChange={setSortBy} />

      {filteredAndSortedBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onEnlist={() => onEnlist(bot)}
        />
      ))}
    </div>
  );
}

export default BotCollection;

