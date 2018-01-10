import { Group } from '../models';
import { validateGroup, validateId } from '../helpers/validator';

export const addGroup = (req, res) => {
  const { isValid, errors } = validateGroup(req.body);
  if (!isValid) {
    return res.status(400).send({ message: 'Invalid inputs', errors });
  }
  const { title } = req.body;
  return Group.create({ title }).then((group) => {
    if (group) {
      return res.status(201).send({ message: 'Group created!', group });
    }
    return res.status(400).send({ message: 'Oops! Please try again' });
  }).catch((error) => {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).send({ message: 'Group already exists!' });
    }
    return res.status(500).send({
      message: 'Internal Server Error',
    });
  });
};

export const updateGroup = (req, res) => {
  const { title } = req.body;

  const { groupId } = req.params;
  if (!validateId(groupId)) {
    return res.status(400).send({ message: 'Enter valid group ID' });
  }

  const { isValid, errors } = validateGroup(req.body);
  if (!isValid) {
    return res.status(400).send({ message: 'Invalid inputs', errors });
  }
  return Group.findById(groupId)
    .then((foundGroup) => {
      if (foundGroup) {
        return Group.update({ title }, {
          where: { id: groupId },
        }).then(() => {
          return res.status(200).send({ message: 'Group updated' });
        }).catch((error) => {
          return res.status(500).send({
            message: 'Internal Server Error',
            error: error.message
          });
        });
      }
      return res.status(404).send({ message: 'Group does not exist' });
    }).catch((error) => {
      return res.status(500).send({
        message: 'Internal Server Error',
        error: error.message
      });
    });
};

export const listAllGroups = (req, res) => {
  return Group.findAll({}).then((groups) => {
    return res.status(200).send({ groups });
  }).catch((error) => {
    return res.status(500).send({
      message: 'Internal Server Error',
      error: error.message
    });
  });
};

export const deleteGroup = (req, res) => {
  const { groupId } = req.params;
  if (!validateId(groupId)) {
    return res.status(400).send({ message: 'Enter valid group ID' });
  }

  return Group.findById(groupId)
    .then((foundGroup) => {
      if (foundGroup) {
        return Group.destroy({
          where: { id: groupId }
        }).then(() => {
          return res.status(200).send({
            message: 'Group deleted'
          });
        }).catch((error) => {
          return res.status(500).send({
            message: 'Internal Server Error',
            error
          });
        });
      }
      return res.status(404).send({ message: 'Group does not exist' });
    }).catch((error) => {
      return res.status(500).send({
        message: 'Internal Server Error',
        error: error.message
      });
    });
};
