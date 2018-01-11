import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllContacts } from './../actions/contactAction';
import ContactCard from './ContactCard';
import GroupCard from './GroupCard';

class Main extends Component {
  componentDidMount() {
    this.props.getAllContacts();
  }

  render() {
    return (
      <div>
        <main className="container">
          <br />
          <div className="row contact-wrapper">
            {this.props.contacts.map((contact) => {
              return <ContactCard key={contact.id} {...contact} />;
            })}
          </div>
          <br />
          <GroupCard />
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  getAllContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contactReducer.contacts
  };
};

export default connect(mapStateToProps, { getAllContacts })(Main);

