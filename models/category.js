module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  return Category;
};
