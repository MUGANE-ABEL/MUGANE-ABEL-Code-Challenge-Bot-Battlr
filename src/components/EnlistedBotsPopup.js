import React from 'react';

function EnlistedBotsPopup({ enlistedBots, onClose }) {
  return (
    <div className="enlisted-bots-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Enlisted Bots</h2>
        <h4>This is a simple list of the enlisted bots, if you would like to see/ review the list, each of them is displayed at the bottom of this table as well</h4>
        <ul>
          {enlistedBots.map(bot => (
            <li key={bot.id}>{bot.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EnlistedBotsPopup;
