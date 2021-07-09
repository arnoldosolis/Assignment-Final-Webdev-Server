const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Joe'
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Shmo'
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'joeshmo@joeshmo.com',
    validate: {
      isEmail: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://img.icons8.com/small/452/error.png'
  },

  gpa: {
    type: Sequelize.DECIMAL,
    defaultValue: 4.0,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }

});

module.exports = Student;
