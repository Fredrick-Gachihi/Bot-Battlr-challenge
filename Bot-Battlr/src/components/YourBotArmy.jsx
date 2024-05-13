import React from "react";

const YourBotArmy = ({ bots, onReleaseBot, onDischargeBot }) => {
  return (
    <div className="your-army">
      <h1>Your Elite Bot Squad</h1>
      <ul className="bot-list">
        {bots.map((bot) => (
          <li key={bot.id} className="bot-item">
            <h2>{bot.name}</h2>
            <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Created: {bot.created_at}</p>
            <p>Updated: {bot.updated_at}</p>
            <div className="button-group">
              <button onClick={() => onReleaseBot(bot)} className="release-button">Release</button>
              <button onClick={() => onDischargeBot(bot)} className="discharge-button">Discharge</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;