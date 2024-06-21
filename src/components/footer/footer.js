import React, { useState } from 'react';
import './footer.css'
import './../membercards/ParticipantsCard'
import micIcon from "./icons/micon.svg"
import micOffIcon from "./icons/micoff.svg"
import videocamIcon from "./icons/videocam.svg"
import captionIcon from "./icons/closed_caption.svg"
import captionIconActive from './icons/captionActive.svg';
import videocamOffIcon from "./icons/videocam_off.svg"
import reactionIcon from "./icons/reaction.svg"
import reactionActive from "./icons/reactionActive.svg"
import screenShareIcon from "./icons/present_to_all_.svg"
import handRaiseIcon from "./icons/raisedHand.svg"
import raisedHandActiveIcon from "./icons/raisedHandActive.svg"
import moreOptionsIcon from './icons/options.svg';
import callEndIcon from "./icons/call_end.svg"
import moreOptionsActiveIcon from "./icons/optionsActive.svg"
import like from "./icons/heart.png"
import thumb from "./icons/thumb.png"
import clap from "./icons/clap.png"
import tada from "./icons/tada.png"
import Joy from "./icons/joy.png";
import thumbDown from "./icons/thumb_down.png";
import Disappointed from './icons/disappointed_relieved.png';
import thinkingFace from './icons/thinking_face.png';
import wow from './icons/open_mouth.png';
import info from './icons/info.svg';
import infoActive from './icons/infoActive.svg';
import Participants from "./icons/participants.svg"
import ParticipantsActive from "./icons/participantsActive.svg"
import chat from './icons/chat.svg';
import chatActive from './icons/chatActive.svg';

import Activities from './icons/category.svg';
import ActivitiesActive from './icons/categorsActive.svg';

const Footer = () => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [moreOptions, setMoreOptions] = useState(false);
  const [reactionsVisible, setReactionsVisible] = useState(false);
  const [captionOn, setCaption ] = useState(false);
  const [notification, setNotification] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [infoOn, setInfo ] = useState(false);
  const [ParticipantsOn, setParticipants ] = useState(false);
  const [chatOn, setChat ] = useState(false);
  const [ActivitiesOn, setActivities ] = useState(false);


  let handRaiseIconSrc = isHandRaised ? raisedHandActiveIcon : handRaiseIcon;
  let handRaiseButtonClass = isHandRaised ? 'footer-button hand-raised-active' : 'footer-button';

  const toggleCaption = () => {
    setCaption(!captionOn);
    showNotification(`Caption ${!captionOn ? 'On' : 'Off'}`);
  };

  let captionIconSrc = captionOn ? captionIconActive : captionIcon
  let captionButtonClass = captionOn ? 'footer-button hand-raised-active' : 'footer-button';

  let reactionIconSrc = reactionsVisible ? reactionActive : reactionIcon
  let reactionButtonClass = reactionsVisible ? 'footer-button hand-raised-active' : 'footer-button';
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };
  const toggleMic = () => {
    setMicOn(!micOn);
    showNotification(`Microphone ${!micOn ? 'On' : 'Off'}`);
  };

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <>
    {notification && <div className="notification">{notification}</div>}
    <div className="footer">
    <div className="footer-left">
          <span>{currentTime}</span>
          <span className="meeting-name">| ICP-7.O</span>
        </div>
    <button className={micOn ? 'footer-button':'footer-button red-active' } onClick={toggleMic} >
        <img src={micOn ? micIcon : micOffIcon} alt="Mic" />
      </button>
      <button className={videoOn ? 'footer-button':'footer-button red-active' } onClick={() => setVideoOn(!videoOn)}>
        <img  src={videoOn ? videocamIcon : videocamOffIcon} alt="Video" />
      </button>
      <button className={captionButtonClass} onClick={toggleCaption}>
        <img  src={captionIconSrc} alt="Video" />
      </button>
      <div className="reaction-container">
        <button className={reactionButtonClass} onClick= {()=> setReactionsVisible(!reactionsVisible)}>
          <img src={reactionIconSrc} alt="Reactions" />
        </button>
        {reactionsVisible && (
          <div className="reactions-dropdown">
            <button className="reaction-button"><img src={like} alt='like'/></button>
            <button className="reaction-button"><img src={thumb} alt='like'/></button>
            <button className="reaction-button"><img src={tada} alt='like'/></button>
            <button className="reaction-button"><img src={clap} alt='like'/></button>
            <button className="reaction-button"><img src={Joy} alt='like'/></button>
            <button className="reaction-button"><img src={wow} alt='like'/></button>
            <button className="reaction-button"><img src={thinkingFace} alt='like'/></button>
            <button className="reaction-button"><img src={Disappointed} alt='like'/></button>
            <button className="reaction-button"><img src={thumbDown} alt='like'/></button>            
          </div>
        )}
      </div>

      <button className="footer-button" onClick={() => setIsScreenSharing(!isScreenSharing)}>
        <img src={screenShareIcon} alt="Screen Share" />
      </button>      
      <button
        className={handRaiseButtonClass}
        onClick={() => setIsHandRaised(!isHandRaised)}
      >
        <img src={handRaiseIconSrc} alt="Hand Raise" />
      </button>

      <button className={moreOptions ? 'footer-button hand-raised-active' : 'footer-button'}
      onClick={() => setMoreOptions(!moreOptions)}
      >
        <img src={moreOptions ? moreOptionsActiveIcon : moreOptionsIcon } alt="More Options" />
      </button>

      <button className="footer-button end-call">
        <img src={callEndIcon} alt="End Call" />
      </button>
      
      <div className="footer-right">
      <button className="footer-button right-footer-button " onClick={() => setInfo(!infoOn)}>
        <img src={infoOn ? infoActive : info} alt="End Call" />
      </button>
      <button className="footer-button right-footer-button " onClick={() => setParticipants(!ParticipantsOn)}>
        <img src={ParticipantsOn ? ParticipantsActive : Participants} alt="group" />
      </button> 
      <button className="footer-button right-footer-button " onClick={() => setChat(!chatOn)}> 
        <img src={chatOn ? chatActive : chat} alt="Chat" />
      </button> 
      <button className="footer-button right-footer-button " onClick={() => setActivities(!ActivitiesOn)}>
        <img src={ActivitiesOn ? ActivitiesActive: Activities} alt="End Call" />
      </button>
      </div>
    </div>
    </>
  );
}

export default Footer