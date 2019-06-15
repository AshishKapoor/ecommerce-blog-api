module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
      },
      {
        freezeTableName: true,
      }
    );
  
    return Order;
  }