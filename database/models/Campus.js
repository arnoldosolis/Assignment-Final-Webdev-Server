const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Campus Name'
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://img.icons8.com/small/452/error.png'
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'address n/a'
  },

  description: {
    type: Sequelize.TEXT('large'),
  }

});

module.exports = Campus;
