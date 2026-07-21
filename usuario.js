module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');

  return sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    matricula: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    criado_em: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'usuarios',
    timestamps: false,
  });
};
