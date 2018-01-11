import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ addNewContact }) => {
  return (
    <header className="container">
      <h2 className="app-title text-center">SIMPLE PHONE BOOK</h2>
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">
            <button
              data-toggle="modal"
              data-target="#contact-form"
              type="button"
              onClick={addNewContact}
              className="btn btn-outline-primary"
            >New Contact
            </button>&nbsp;
            <button type="button" className="btn btn-outline-primary">
              New Group
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  addNewContact: PropTypes.func.isRequired
};

export default Header;

