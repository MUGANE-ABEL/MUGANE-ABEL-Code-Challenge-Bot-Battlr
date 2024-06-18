import React from 'react';

function YourBotArmy({ army, removeBot, deleteBot }) {
  return (
    <div className="your-bot-army">
      {army.map(bot => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>{bot.catchphrase}</p>
          <button onClick={() => removeBot(bot)}>Remove</button>
          <button onClick={() => deleteBot(bot)} className="delete-button">x</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
