import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';


const App = () => {
  const [botCollection, setBotCollection] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  // Fetch bot data from backend upon component mount
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBotCollection(data))
      .catch(error => console.error('Error fetching bot data:', error));
  }, []);

  // Functions to add, release, and discharge bots
  const addToArmy = (bot) => {
    setYourBotArmy([...yourBotArmy, bot]);
    setBotCollection(botCollection.filter((b) => b.id !== bot.id));
  };

  const releaseFromArmy = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
    setBotCollection([...botCollection, bot]);
  };

  const dischargeBot = (bot) => {
    // Code to delete the bot from backend
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  return (
    <Router>
      <Switch>
        <Route path="/bots" exact>
          <div>
            <SortBar />
            <SearchBar /> {/* Include SearchBar component */}
            <BotCollection
              bots={botCollection}
              addToArmy={addToArmy}
              botSpecsLinkEnabled={true}
            />
          </div>
          <YourBotArmy
            bots={yourBotArmy}
            releaseFromArmy={releaseFromArmy}
            dischargeBot={dischargeBot}
          />
        </Route>
        <Route path="/bots/:botId" component={BotSpecs} />
      </Switch>
    </Router>
  );
};

export default App;