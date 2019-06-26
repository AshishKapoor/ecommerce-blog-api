module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
      },
      {
        freezeTableName: true,
      }
    );
  
    return Order;
  }