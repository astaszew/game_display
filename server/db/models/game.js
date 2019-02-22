const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  link: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  trailer: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  platform: {
    type: Sequelize.ENUM('PC', 'xbox', 'ps4')
  },
  releaseDate: {
    type: Sequelize.DATE
  },
  viewed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  played: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Game
