module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    available: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
  });

  return Product;
}
