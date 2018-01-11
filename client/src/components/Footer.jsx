import React from 'react';

const Footer = () => {
  return (
    <footer className="container">
      <div className="stats text-center">
        <p>
          <i className="fa fa-address-card-o" aria-hidden="true" />
            Total Contacts: 20
        </p>
        <p>
          <i className="fa fa-users" aria-hidden="true" />
          Total Groups: 5
        </p>
      </div>
    </footer>
  );
};

export default Footer;

