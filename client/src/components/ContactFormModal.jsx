import React from 'react';
import PropTypes from 'prop-types';

const ContactFormModal = ({ formChange, formErrors, submitContact, contact }) => {
  const { firstName, lastName, phone } = contact;
  return (
    <div className="row">
      <div className="col-md-offset-12 modal fade" id="contact-form">
        <div className="modal-dialog">
          <form id="multi-form" onSubmit={submitContact}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={formChange}
                  />
                  {formErrors &&
                    <span className="text-danger">{formErrors.firstName}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={formChange}
                  />
                  {formErrors &&
                    <span className="text-danger">{formErrors.lastName}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={formChange}
                  />
                  {formErrors &&
                    <span className="text-danger">{formErrors.phone}</span>}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


ContactFormModal.defaultProps = {
  contact: PropTypes.shape({
    firstName: '',
    lastName: '',
    phone: ''
  }),
  formErrors: {}
};

ContactFormModal.propTypes = {
  submitContact: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string
  }),
  formErrors: PropTypes.shape({})
};

export default ContactFormModal;
