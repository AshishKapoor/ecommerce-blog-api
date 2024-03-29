module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    authorId: DataTypes.INTEGER,
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    freezeTableName: true,
  });

  Post.associate = (models) => {};

  return Post;
}
