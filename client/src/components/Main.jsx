import React from 'react';
import ContactCard from './ContactCard';
import GroupCard from './GroupCard';

export default () => {
  return (
    <main className="container">

      <br />
      <div className="row contact-wrapper">
        <div className="col-sm-6 col-md-3 col-xs-12">
          <ContactCard />
        </div>
      </div>

      <br />
      <GroupCard />

    </main>
  );
};

