import React from 'react'
import BotCard from './BotCard'

function BotCollection({ bot, onEnlist, onDischarge, onViewDetails, enlisted }) {
  return (
    <div>
      {BroadcastChannel.map((bot) =>{
        <BotCard 
        key={bot.id}
        bot={bot}
        onEnlist={onEnlist}
        onDischarge={onDischarge}
        onViewDetails={onViewDetails}
        enlisted={enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)} 
        />
      } )}
    </div>
  )
}

export default BotCollection