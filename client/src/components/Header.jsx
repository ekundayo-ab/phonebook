import React from 'react';

export default () => {
  return (
    <header className="container">
      <h2 className="app-title text-center">SIMPLE PHONE BOOK</h2>
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">
            <button type="button" className="btn btn-outline-primary">New Contact</button>&nbsp;
            <button type="button" className="btn btn-outline-primary">New Group</button>
          </div>
        </div>
      </div>
    </header>
  );
};

