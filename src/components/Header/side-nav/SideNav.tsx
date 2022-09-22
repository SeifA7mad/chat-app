import { createPortal } from 'react-dom';

import ClandarImage from '../../../assets/calendar.png';
import LayersImage from '../../../assets/layers.png';
import LockImage from '../../../assets/lock.png';
import TargetImage from '../../../assets/target.png';
import LogoutImage from '../../../assets/log_out.png';

import './SideNav.css';

const SideNav = (props: any) => {
  const portalElement: any = document.getElementById('overlays');
  return (
    <>
      {!props.hide &&
        createPortal(
          <div className="backdrop" onClick={props.onClose}></div>,
          portalElement
        )}
      {createPortal(
        <div className={`sideNav ${props.hide ? 'hide' : ''}`}>
          <div className="navList">
            <section>
              <a href="">
                {' '}
                <img src={TargetImage} /> Find & book{' '}
              </a>
              <a href="">
                {' '}
                <img src={ClandarImage} /> My sessions{' '}
              </a>
            </section>
            <span className="line"></span>
            <section>
              <a href="">
                {' '}
                <img src={LayersImage} /> Terms of service{' '}
              </a>
              <a href="">
                {' '}
                <img src={LockImage} /> Privacy policy{' '}
              </a>
              <a href="">
                {' '}
                <img src={TargetImage} /> Support{' '}
              </a>
            </section>
            <span className="line"></span>
            <section>
              <a href="">
                {' '}
                <img src={LogoutImage} /> Log out{' '}
              </a>
            </section>
          </div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default SideNav;
