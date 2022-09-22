import Widget from 'rasa-webchat';
import AvatarImg from '../../assets/avatar.svg';
import Headshot from '../../assets/headshot.png';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Button from '@mui/material/Button';
import './style.css';
import { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BookModal from './book-modal/BookModal';
import SendButtonIcon from './SendButtonIcon';

function Chatbot() {
  const { state } = useLocation();
  const uid = state;
  console.log('uid', uid);
  let start_intent = `/greet_with_uid{"uid":"${uid}"}`;

  const [width, setWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  }, []);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      try {
        // @ts-ignore
        // eslint-disable-next-line
        document.querySelector('.rw-send').click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const custommessageDelay = (message: any) => {
    let delay = message.length * 30;
    if (delay > 2 * 1000) delay = 3 * 1000;
    if (delay < 2 * 100) delay = 2 * 100;
    return delay;
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isBookModalShown, setIsBookModalShown] = useState(false);

  const onClickBookTherapistButtonHandler = () => {
    setIsBookModalShown((prevIsBookModalShown) => !prevIsBookModalShown);
  };

  return (
    <>
      {isBookModalShown && (
        <BookModal onClose={onClickBookTherapistButtonHandler} />
      )}
      <Header />
      <div className="chat-body">
        <div className="chatbot-full-avatar-div">
          <img
            className="chatbot-full-avatar"
            src={require('../../assets/leora_chatavatar.png')}
            alt="ChatBot"
          />
        </div>

        <div className="widget-section" onKeyDown={handleKeyDown}>
          <div className="book-btn">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="book-th-button"
              onClick={onClickBookTherapistButtonHandler}
              //endIcon={<SendIcon />}
            >
              Book a therapist
            </Button>
          </div>
          <Widget
            initPayload={start_intent}
            socketUrl={'https://face.leora-ai.click'}
            socketPath={'/socket.io/'}
            customData={{ language: 'en' }} // arbitrary custom data. Stay minimal as this will be added to the socket
            title={'Leora'}
            embedded={true}
            showMessageDate
            showFullScreenButton={false}
            customMessageDelay={custommessageDelay}
            params={{
              storage: 'session'
            }}
            inputTextFieldHint={'Start typing'}
            subtitle={'A.I. self-care companion'}
          />
          {/* <SendButtonIcon className="send-button" /> */}
        </div>
      </div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        fullWidth
        variant="outlined"
        className="menu-mobile"
      >
        Account
        <img
          className="header-arrow"
          src={require('../../assets/arrow_down.png')}
          alt="Arrow"
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        className="menu-mobile-list"
      >
        <MenuItem onClick={handleClose}>
          <img
            className="header-arrow"
            src={require('../../assets/calendar.png')}
            alt="Arrow"
          />
          My sessions
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img
            className="header-arrow"
            src={require('../../assets/layers.png')}
            alt="Arrow"
          />
          Terms of service
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img
            className="header-arrow"
            src={require('../../assets/lock.png')}
            alt="Arrow"
          />
          Privacy policy
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img
            className="header-arrow"
            src={require('../../assets/target.png')}
            alt="Arrow"
          />
          Support
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img
            className="header-arrow"
            src={require('../../assets/log_out.png')}
            alt="Arrow"
          />
          Log out
        </MenuItem>
      </Menu>
    </>
  );
}

export default Chatbot;
