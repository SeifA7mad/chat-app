import { createPortal } from 'react-dom';

import './BookModal.css';

const BookModal = (props: any) => {
  const portalElement: any = document.getElementById('overlays');
  return (
    <>
      {createPortal(
        <div className="backdrop" onClick={props.onClose}></div>,
        portalElement
      )}
      {createPortal(
        <div className="book-modal">
          <section className="header">
            <p>icon</p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={props.onClose}
            >
              <path
                d="M13.4023 1.88672L8.28906 7L13.4023 12.1133L12.1133 13.4023L7 8.28906L1.88672 13.4023L0.597656 12.1133L5.71094 7L0.597656 1.88672L1.88672 0.597656L7 5.71094L12.1133 0.597656L13.4023 1.88672Z"
                fill="#0D0A19"
              />
            </svg>
          </section>
          <section className="body">
            <h1> Access therapy online</h1>
            <p>
              {' '}
              On leora, you can book a 50-min video therapy with a mental health
              expert that matches with your need
            </p>
          </section>
          <section className="footer">
            <button type="button"> Get started </button>
          </section>
        </div>,
        portalElement
      )}
    </>
  );
};

export default BookModal;
