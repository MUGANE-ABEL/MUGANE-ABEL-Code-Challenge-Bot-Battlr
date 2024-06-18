import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import EnlistedBotsPopup from './components/EnlistedBotsPopup';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortType, setSortType] = useState('');
  const [showEnlisted, setShowEnlisted] = useState(false); // State for showing enlisted bots

  useEffect(() => {
    axios.get('http://localhost:8001/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const addBotToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeBotFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const deleteBot = (bot) => {
    axios.delete(`http://localhost:8001/bots/${bot.id}`)
      .then(() => {
        setArmy(army.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  const sortedBots = [...bots].sort((a, b) => {
    switch (sortType) {
      case 'health':
        return b.health - a.health;
      case 'damage':
        return b.damage - a.damage;
      case 'armor':
        return b.armor - a.armor;
      default:
        return 0;
    }
  });

  // Filter enlisted bots
  const enlistedBots = bots.filter(bot => army.find(b => b.id === bot.id));

  return (
    <div className="App">
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBack={() => setSelectedBot(null)} addBotToArmy={addBotToArmy} />
      ) : (
        <>
          <SortBar setSortType={setSortType} />
          <div className="enlisted-btn-container">
            <button onClick={() => setShowEnlisted(true)}>Show Enlisted</button>
            {/* Add other buttons here if needed */}
          </div>
          {showEnlisted && (
            <EnlistedBotsPopup
              enlistedBots={enlistedBots}
              onDelete={removeBotFromArmy} // Assuming onDelete should unenlist the bot
              onClose={() => setShowEnlisted(false)}
            />
          )}
          <BotCollection bots={sortedBots} onBotClick={setSelectedBot} />
        </>
      )}
      <YourBotArmy army={army} removeBot={removeBotFromArmy} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
