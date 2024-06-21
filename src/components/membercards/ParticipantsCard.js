import React from 'react';
import './membercard.css';
import MicON from "./img/micon.svg"
import MicOff from "./img/micoff.svg"

const ParticipantCard = ({ participants, micState }) => {
  const displayedParticipants = participants.slice(0, 8);
  const remainingCount = Math.max(0, participants.length - 8);

  return (
    <>
      {displayedParticipants.map((participant, index) => (
        <div key={index} className="card">
          <span className='mic'>
         <img src={micState ? MicON : MicOff } className='mic-icon' alt='mic'/>
         </span>
          <img src={participant.img} alt={participant.name} className="stud-img" />
          <span className="stud-name">{participant.name}</span>
        </div>
      ))}
      {remainingCount > 0 && (
        <div key="remaining" className="card other-card">
          <img src={displayedParticipants[7].img} alt={displayedParticipants[7].name} className="other-img bg-shadow" />
          <img src={displayedParticipants[4].img} alt={displayedParticipants[7].name} className="other-img other-img2" />

          <span className="stud-name other-name">
            {displayedParticipants[7].name} and {remainingCount} others
          </span>
        </div>
      )}
    </>
  );
};

export default ParticipantCard;