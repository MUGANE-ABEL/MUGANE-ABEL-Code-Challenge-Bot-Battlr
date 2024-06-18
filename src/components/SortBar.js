import React from 'react';

function SortBar({ setSortType }) {
  return (
    <div className="sort-bar">
      <button onClick={() => setSortType('health')}>Sort by Health</button>
      <button onClick={() => setSortType('damage')}>Sort by Damage</button>
      <button onClick={() => setSortType('armor')}>Sort by Armor</button>
    </div>
  );
}

export default SortBar;
