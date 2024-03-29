module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('cart', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    freezeTableName: true,
  });

  return Cart;
}
