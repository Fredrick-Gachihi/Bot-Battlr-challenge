// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import BotCollection from './components/BotCollection'
// import { useEffect } from 'react'

// function App() {
//   const [ bot, setBot] = useState();
  

// useEffect(() => {
//   fetch("http://localhost:3030/bots")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch bots');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (data && data.bot) {
//         setBot(data.bot);
//       } else {
//         throw new Error('Invalid response format');
//       }
//     })
//     .catch((error) => {
//       console.error('Error fetching bots:', error);
//     });
// }, []);
//   return 
//   <>
//     <BotCollection bots={bot} />
//     </>
 
// }

// export default App

// App.jsx
import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';

function App() {
  // ... other state and logic

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="React logo" />
        <img src={viteLogo} alt="Vite logo" className="Vite-logo" />
      </header>
      {error && <p className="error">Error: {error.message}</p>}
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onGoBack={() => setSelectedBot(null)}
          onEnlist={handleEnlist}
        />
      ) : (
        <>
          <SortBar sortBy={sortBy} onSortChange={handleSortChange} />
          <BotCollection
            bots={bots}
            onEnlist={handleEnlist}
  
          />
          <YourBotArmy
            enlistedBots={enlistedBots}
            onRelease={handleRelease}/>
        </>
      )}
    </div>
  );
}

export default App;