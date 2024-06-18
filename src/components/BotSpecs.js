import React from 'react';

function BotSpecs({ bot, goBack, addBotToArmy }) {
  return (
    <div className="bot-specs">
      <button onClick={goBack}>Back to List</button>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <button onClick={() => addBotToArmy(bot)}>Enlist Bot</button>
    </div>
  );
}

export default BotSpecs;
