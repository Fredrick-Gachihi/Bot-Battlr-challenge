import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotCollection from './components/BotCollection';
import { useEffect } from 'react'
import SortBar from './components/SortBar'
import YourBotArmy from './components/YourBotArmy'
import botCard from './components/BotCard'
import BotSpecs from './components/BotSpecs'


function App() {
  const [ bots, setBots] = useState();
  const [error, setError] = useState(null); 
  const [selectedBot, setSelectedBot] = useState(null);
  const [enlistedBots, setEnlistedBots] =useState(null);
  const [sortBy, setSortBy] = useState(null);

    const handleEnlist = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };

  const handleRelease = (botId) => {
    setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot.id !== botId));
  };

  const handleViewDetails = (botId) => {
    setSelectedBot(bots.find((bot) => bot.id === botId)); // Find and select bot for BotSpecs
  };

  const handleSortChange = (newSortCriteria) => {
    setSortBy(newSortCriteria);
  };

  

useEffect(() => {
  fetch("http://localhost:3030/bots")
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch bots');
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.bot) {
        setBots(data.bot);
      } else {
        throw new Error('Invalid response format');
      }
    })
    .catch((error) => {
      console.error('Error fetching bots:', error);
      console.log(response)
    });
}, []);
  return (
        <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="React logo" />
        <img src={viteLogo} alt="Vite logo" className="Vite-logo" />
      </header>
      {error && <p className="error">Error: {error}</p>}
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

export default App

