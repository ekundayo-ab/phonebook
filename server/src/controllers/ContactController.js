import { Contact } from '../models';
import { validateContact, validateId } from '../helpers/validator';

export const addContact = (req, res) => {
  const { isValid, errors } = validateContact(req.body);
  if (!isValid) {
    return res.status(400).send({ message: 'Invalid inputs', errors });
  }
  const { firstName, lastName, phone } = req.body;
  return Contact.create({ firstName, lastName, phone })
    .then((contact) => {
      if (contact) {
        return res.status(201).send({ message: 'Contact created!', contact });
      }
      return res.status(400).send({ message: 'Oops! Please try again' });
    }).catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).send({ message: 'Phone Number already used!' });
      }
      return res.status(500).send({
        message: 'Internal Server Error',
      });
    });
};

export const updateContact = (req, res) => {
  const { firstName, lastName, phone } = req.body;

  const { contactId } = req.params;
  if (!validateId(contactId)) {
    return res.status(400).send({ message: 'Enter valid contact ID' });
  }

  const { isValid, errors } = validateContact(req.body);
  if (!isValid) {
    return res.status(400).send({ message: 'Invalid inputs', errors });
  }
  return Contact.findById(contactId)
    .then((foundContact) => {
      if (foundContact) {
        return Contact.update({ firstName, lastName, phone }, {
          where: { id: contactId },
        }).then(() => {
          return res.status(200).send({ message: 'Contact updated' });
        }).catch((error) => {
          return res.status(500).send({
            message: 'Internal Server Error',
            error: error.message
          });
        });
      }
      return res.status(404).send({ message: 'Contact does not exist' });
    }).catch((error) => {
      return res.status(500).send({
        message: 'Internal Server Error',
        error: error.message
      });
    });
};

export const listAllContacts = (req, res) => {
  return Contact.findAll({}).then((contacts) => {
    return res.status(200).send({ contacts });
  }).catch((error) => {
    return res.status(500).send({
      message: 'Internal Server Error',
      error: error.message
    });
  });
};

export const deleteContact = (req, res) => {
  const { contactId } = req.params;
  if (!validateId(contactId)) {
    return res.status(400).send({ message: 'Enter valid contact ID' });
  }

  return Contact.findById(contactId)
    .then((foundContact) => {
      if (foundContact) {
        return Contact.destroy({
          where: { id: contactId }
        }).then(() => {
          return res.status(200).send({
            message: 'Contact deleted'
          });
        }).catch((error) => {
          return res.status(500).send({
            message: 'Internal Server Error',
            error
          });
        });
      }
      return res.status(404).send({ message: 'Contact does not exist' });
    }).catch((error) => {
      return res.status(500).send({
        message: 'Internal Server Error',
        error: error.message
      });
    });
};
