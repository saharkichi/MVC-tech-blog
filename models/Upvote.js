// import parts from sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection
const sequelize = require('../config/connection');

// initialize Comment model by extending off Sequelize's Model class
class Upvote extends Model {}
 Upvote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id',
      }
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comment',
        key: 'id',
      }
    },
    upvoted_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'upvote',
  }
);

module.exports = Upvote;
