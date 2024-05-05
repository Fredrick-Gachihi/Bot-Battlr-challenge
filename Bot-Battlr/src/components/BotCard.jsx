import React from 'react'

function BotCard({ bot, onEnlist, onDischarge, onViewDetails, enlisted }) {
    const{ id, name,health,image,classType,damage,armor} = bot;

    const handleEnlist= () => {
        if (!enlisted){
            onEnlist(bot)
        }
    };
    const handleDicharge = () => {
        onDischarge(bot.id)
    };
    const handleViewDetails = () => {
        onViewDetails(bot.id)
    };

  return (
   <div className="grid grid-cols-4 gap-4">
        <div className='w-full'>
        <img src={image} className='w-full-[250px] object-cover'/>
        <h3>name= {name}</h3>
        </div>
        <div>
        <span>Health: {health}</span>
        <span>Armor: {armor} </span>
        <span>Damge: {damage}</span>
        </div>
        <>
        {
            enlisted ? (
                <button onClick={handleDicharge}>Dicharge</button>
            ):(
                <button onClick={handleEnlist}>EnList</button>
            )} 
            <button onClick={handleViewDetails}>viewDetails</button>
        </>
    </div>
  )
}

export default BotCard