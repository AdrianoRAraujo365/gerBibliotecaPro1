module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');

  return sequelize.define('Livro', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    editora: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Disponível',
    },
  }, {
    tableName: 'livros',
    timestamps: false,
  });
};
