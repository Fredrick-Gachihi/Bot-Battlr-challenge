// import React from 'react'

// function BotCard({ bot, onEnlist, onDischarge, onViewDetails, enlisted }) {
//     const{ id, name,health,image,classType,damage,armor} = bot;

//     const handleEnlist= () => {
//         if (!enlisted){
//             onEnlist(bot)
//         }
//     };
//     const handleDicharge = () => {
//         onDischarge(bot.id)
//     };
//     const handleViewDetails = () => {
//         onViewDetails(bot.id)
//     };

//   return (
//    <div className="grid grid-cols-4 gap-4">
//         <div className='w-full'>
//         <img src={image} className='w-full-[250px] object-cover'/>
//         <h3>name= {name}</h3>
//         </div>
//         <div>
//         <span>Health: {health}</span>
//         <span>Armor: {armor} </span>
//         <span>Damge: {damage}</span>
//         </div>
//         <>
//         {
//             enlisted ? (
//                 <button onClick={handleDicharge}>Dicharge</button>
//             ):(
//                 <button onClick={handleEnlist}>EnList</button>
//             )} 
//             <button onClick={handleViewDetails}>viewDetails</button>
//         </>
//     </div>
//   )
// }

// export default BotCard

import React from 'react';

function BotCard({ bot, onEnlist, onDischarge, onViewDetails, enlisted, sameClassEnlisted }) {
  const { id, name, health, image, classType, damage, armor } = bot;

  const handleEnlist = async () => {
    if (enlisted || sameClassEnlisted) {
      return; // Prevent enlistment if already enlisted or same class limit reached
    }

    try {
      await onEnlist(bot); // Call the enlistment logic
    } catch (error) {
      console.error('Error enlisting bot:', error);
      // Handle the error gracefully, potentially displaying an error message
    }
  };

  const handleDischarge = () => {
    onDischarge(bot.id);
  };

  const handleViewDetails = () => {
    onViewDetails(bot.id);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="w-full">
        <img src={image} className="w-full-[250px] object-cover" />
        <h3>Name: {name}</h3>
      </div>
      <div>
        <span>Health: {health}</span>
        <span>Armor: {armor}</span>
        <span>Damage: {damage}</span>
      </div>
      <>
        {enlisted ? (
          <button onClick={handleDischarge}>Discharge</button>
        ) : (
          <button onClick={handleEnlist} disabled={sameClassEnlisted}>
            {sameClassEnlisted ? 'Already Enlisted (Class Limit)' : 'Enlist'}
          </button>
        )}
        <button onClick={handleViewDetails}>View Details</button>
      </>
    </div>
  );
}

export default BotCard;