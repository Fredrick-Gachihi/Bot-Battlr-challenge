import React from 'react';

function YourBotArmy({ bots, releaseFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.length === 0 ? (
        <p>You haven't enlisted any bots yet.</p>
      ) : (
        <ul className="bot-list">
          {bots.map(bot => (
            <li key={bot.id}>
              <div className="bot-info">
                <img src={bot.avatar_url} alt={bot.name} />
                <h3>{bot.name}</h3>
                <button onClick={() => releaseFromArmy(bot)}>Release</button>
                <button onClick={() => dischargeBot(bot)}>Discharge</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default YourBotArmy;