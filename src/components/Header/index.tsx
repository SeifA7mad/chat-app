import Button from '@mui/material/Button';
import './style.css';
import { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HumburgerButton from './humburger-button/HumburgerButton';
import SideNav from './side-nav/SideNav';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isSideNavShown, setIsSideNavShown] = useState(false);

  const onClickSideMenuButtonHandler = () => {
    setIsSideNavShown((prevIsSideNavShown) => !prevIsSideNavShown);
  };

  return (
    <>
      <SideNav hide={!isSideNavShown} onClose={onClickSideMenuButtonHandler} />
      <div className="chatbot-header">
        <img
          className="cb-header-logo"
          src={require('../../assets/welcome0.png')}
          alt="ChatBot"
        />
        <div className="avatar-section">
          <img
            className="avatar-img"
            src={require('../../assets/headshot.png')}
            alt="ChatAvatar"
          />
          <section>
            <h1> Leora </h1>
            <p> A.I self-care companion</p>
          </section>
        </div>
        <div className="button-section">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="account-button"
            fullWidth
            variant="outlined"
            //endIcon={<SendIcon />}
          >
            Account
            <img
              className="header-arrow"
              src={require('../../assets/arrow_down.png')}
              alt="Arrow"
            />
          </Button>
        </div>
        <HumburgerButton
          open={isSideNavShown}
          onClick={onClickSideMenuButtonHandler}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
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
      </div>
    </>
  );
}

export default Header;
