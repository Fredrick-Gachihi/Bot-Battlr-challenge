// import React from 'react'
// import BotCard from './BotCard'

// function BotCollection({ bot, onEnlist, onDischarge, onViewDetails, enlisted }) {
//   return (
//     <div>
//       {BroadcastChannel.map((bot) =>{
//         <BotCard 
//         key={bot.id}
//         bot={bot}
//         onEnlist={onEnlist}
//         onDischarge={onDischarge}
//         onViewDetails={onViewDetails}
//         enlisted={enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)} 
//         />
//       } )}
//     </div>
//   )
// }

// export default BotCollection

function BotCollection({ bots, onEnlist, onFilterChange, onSortChange }) {
  // State for filtering and sorting criteria
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  // ... other logic and rendering

  return (
    <div className="bot-collection">
      {/* Search bar (optional) */}
      <SearchBar onSearchChange={handleSearchChange} />

      {/* Filter bar */}
      <FilterBar
        filters={["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]}
        selectedFilters={selectedFilters}
        onFilterChange={setSelectedFilters}
      />

      {/* Sort bar */}
      <SortBar sortBy={sortBy} onSortChange={setSortBy} />

      {/* List of bot cards */}
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