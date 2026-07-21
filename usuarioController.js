const { Usuario } = require('../models');

exports.list = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

exports.create = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
  await usuario.update(req.body);
  res.json(usuario);
};

exports.remove = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
  await usuario.destroy();
  res.status(204).end();
};
