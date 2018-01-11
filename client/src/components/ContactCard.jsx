import React from 'react';

export default () => {
  return (
    <div className="contact-card">
      <div className="contact-details">
        <span className="lead">Ekundayo Abiona</span><br />
        <span className="lead">01044556688</span><br />
        <p><small className="lead">friends</small></p>
      </div>
      <div className="contact-action">
        <i className="fa fa-edit" aria-hidden="true" />
        <i className="fa fa-trash" aria-hidden="true" />
      </div>
    </div>
  );
};
