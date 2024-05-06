import React from 'react';

function YourBotArmy({ enlistedBots, onRelease }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {enlistedBots.length === 0 ? (
        <p>You haven't enlisted any bots yet.</p>
      ):(
        <ul className="bot-list">
          {enlistedBots.map((bot) => (
            <li key={bot.id}>
              <div className="bot-info">
                <img src={bot.avatar_url} alt={bot.name} />
                <h2>{bot.name}</h2>
              </div>
              <button onClick={() => onRelease(bot.id)}>Release</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default YourBotArmy;