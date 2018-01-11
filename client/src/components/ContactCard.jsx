import React from 'react';
import PropTypes from 'prop-types';

const ContactCard = (props) => {
  const { firstName, lastName, phone } = props;
  return (
    <div className="col-sm-6 col-md-3 col-xs-12">
      <div className="contact-card">
        <div className="contact-details">
          <span className="lead">{firstName} {lastName}</span><br />
          <span className="lead">{phone}</span><br />
          <p><small className="lead">friends</small></p>
        </div>
        <div className="contact-action">
          <i className="fa fa-edit" aria-hidden="true" />
          <i className="fa fa-trash" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactCard;

