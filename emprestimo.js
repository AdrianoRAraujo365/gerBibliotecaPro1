module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');

  return sequelize.define('Emprestimo', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    livro_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    data_emprestimo: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    data_prevista: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    data_devolucao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Ativo',
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'emprestimos',
    timestamps: false,
  });
};
