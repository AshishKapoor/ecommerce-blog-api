module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING
      },
      {
        freezeTableName: true,
      }
    );
  
    User.associate = (models) => {
      User.hasMany(models.product);
      User.hasMany(models.cart);
    };

    return User;
  }