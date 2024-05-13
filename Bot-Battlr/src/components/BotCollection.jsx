import React from "react";

const BotCollection = ({ bots, onAddBot }) => {
  return (
    <div className="bot-collection">
      <h1>Bot Collection</h1>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <h2>{bot.name}</h2>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Created At: {bot.created_at}</p>
            <p>Updated At: {bot.updated_at}</p>
            <button onClick={() => onAddBot(bot)}>Add to Army</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;