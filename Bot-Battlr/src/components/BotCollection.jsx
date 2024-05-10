import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, onEnlist }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          onEnlist={onEnlist}
        />
      ))}
    </div>
  );
}

export default BotCollection;