import React from 'react';

const BotSpecs = ({ bot, onGoBack, onEnlist }) => {
  return (
    <div className="bot-specs">
     <button onClick={onGoBack}>Go Back</button>
      <h2>{bot.name} Specs</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;