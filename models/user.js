module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 6
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
  }, {
    freezeTableName: true,
  });

  User.associate = (models) => {
    User.hasMany(models.product);
    User.hasMany(models.cart);
  };

  return User;
}
