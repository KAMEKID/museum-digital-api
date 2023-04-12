module.exports = (sequelize, Sequelize) => {
  const Museum = sequelize.define("museum", {
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alamat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    map: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Museum;
};
