import { Sequelize, DataTypes } from 'sequelize';
import db from '../db.mjs';

const Product = db.define('Product', {
  // Assuming your product has an id, name, and price
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
  // Add other fields as necessary
}, {
  tableName: 'products', // specify the table name here
});

export default Product;
