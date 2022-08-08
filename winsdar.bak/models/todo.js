module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    text: {
      type: DataTypes.string,
      allowNull: false,
    },
  });
  return Todo;
};
