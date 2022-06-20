const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Product extends Model {}

Product.init(
  {
    id: {
    //This is to define unique ID properties per product
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },  
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
