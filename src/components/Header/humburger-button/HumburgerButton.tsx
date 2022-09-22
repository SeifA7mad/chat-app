import './HumburgerButton.css';

const HumburgerButton = (props: any) => {
  return (
    <div onClick={props.onClick} className={`container ${props.open ? 'change' : ''}`}>
      <div className={'bar1'}></div>
      <div className={'bar2'}></div>
      <div className={'bar3'}></div>
    </div>
  );
};

export default HumburgerButton;
