import React from 'react';

function BotCollection({ bots, onBotClick }) {
  return (
    <div className="bot-collection">
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Health</th>
            <th>Damage</th>
            <th>Armor</th>
            <th>Class</th>
            <th>Catchphrase</th>
          </tr>
        </thead>
        <tbody>
          {bots.map(bot => (
            <tr key={bot.id} onClick={() => onBotClick(bot)}>
              <td><img src={bot.avatar_url} alt={bot.name} /></td>
              <td>{bot.name}</td>
              <td>{bot.health}</td>
              <td>{bot.damage}</td>
              <td>{bot.armor}</td>
              <td>{bot.bot_class}</td>
              <td>{bot.catchphrase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BotCollection;
