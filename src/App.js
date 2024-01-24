// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [invitationAccepted, setInvitationAccepted] = useState(false);
  const [noButtonClicked, setNoButtonClicked] = useState(false);
  const [showSecondGif, setShowSecondGif] = useState(false);

  const handleYesClick = () => {
    setInvitationAccepted(true);
    setShowSecondGif(true); // Show the second GIF after clicking "Yes"
  };

  const handleNoClick = () => {
    setNoButtonClicked(true);
  };

  return (
    <div className={`app ${invitationAccepted ? 'dark-overlay' : ''}`}>
      {invitationAccepted ? (
        <div className="accepted">
          <h1>hehe 😍</h1>
          <div className="gif-container">
            {showSecondGif ? (
              // Display the second GIF after clicking "Yes"
              <img
                src="https://media1.giphy.com/media/A7ljO6Ch0F7PQkttoQ/giphy.gif?cid=ecf05e475a0u4fvon6s3j5l0pzfkl9d0q1lida68qqko70af&ep=v1_gifs_related&rid=giphy.gif&ct=g"
                alt="Second Animated Emoji"
                style={{ width: '150px', height: 'auto' }}
              />
            ) : null}
          </div>
          <p>Asta La Vista Beybe!</p>
        </div>
      ) : (
        <div className="invitation-form">
          <h1>Will you go out with me?</h1>
          <div className="gif-container">
            {/* Display the initial GIF before clicking "Yes" */}
            <img
              src="https://media2.giphy.com/media/m6HvzWWm9LVfrdTJpX/giphy.gif?cid=ecf05e47ah4ynzrr2jm7st8jln84f56j74jhm7dxdfsoh8sa&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="Animated Emoji"
              style={{ width: '150px', height: 'auto' }}
            />
          </div>
          <div className="choices">
            <button onClick={handleYesClick} className="yes-button">
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className={`no-button ${noButtonClicked ? 'disabled' : ''}`}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
