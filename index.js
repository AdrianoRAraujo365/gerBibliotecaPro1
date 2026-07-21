const { Sequelize } = require('sequelize');
const config = require('../config/database');
const LivroModel = require('./livro');
const UsuarioModel = require('./usuario');
const EmprestimoModel = require('./emprestimo');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  logging: config.logging,
});

const Livro = LivroModel(sequelize);
const Usuario = UsuarioModel(sequelize);
const Emprestimo = EmprestimoModel(sequelize);

Livro.hasMany(Emprestimo, { foreignKey: 'livro_id', onDelete: 'SET NULL' });
Usuario.hasMany(Emprestimo, { foreignKey: 'usuario_id', onDelete: 'SET NULL' });
Emprestimo.belongsTo(Livro, { foreignKey: 'livro_id' });
Emprestimo.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = {
  sequelize,
  Livro,
  Usuario,
  Emprestimo,
};
