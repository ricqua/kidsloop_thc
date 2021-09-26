import React from "react";

const modal = () => {
  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal__container">
          <strong>Success!!!</strong>
          <p>
            Your message has been sent successfully. We will respond as soon as
            possible.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default modal;
