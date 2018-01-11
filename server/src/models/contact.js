'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: ["^[a-z-]+$",'i'],
          msg: 'Must consist of only letters and/or -'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: ["^[a-z-]+$",'i'],
          msg: 'Must consist of only letters and/or -'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Contact.belongsTo(models.Category, {
          foreignKey: 'groupId',
          as: 'group',
        });
      }
    }
  });
  return Contact;
};