const { Model, DataTypes } = require('sequelize');
const { model } = require('../config/connection');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns: id, product_id, tag_id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: Datatypes.INTEGER,
      references: {
        key: "id",
        model: "product"
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "tag"
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
