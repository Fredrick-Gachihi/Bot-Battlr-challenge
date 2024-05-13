import React, { useState } from 'react';

const BotCard = ({ bot, onRelease, onDischarge }) => {
 
}

const BotsPage = ({ bots, onAddBot }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBots = bots.filter((bot) => bot.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="main-page">
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search Bots" />
      {filteredBots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onRelease={() => onRelease(bot.id)} onDischarge={() => onDischarge(bot.id)} />
      ))}
      <button onClick={onAddBot}>Add Bot</button>
    </div>
  );
}

export default BotsPage;