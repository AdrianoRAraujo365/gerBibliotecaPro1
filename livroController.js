const { Livro } = require('../models');
const { Op } = require('sequelize');

exports.list = async (req, res) => {
  const livros = await Livro.findAll();
  res.json(livros);
};

exports.create = async (req, res) => {
  try {
    const livro = await Livro.create(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);
  if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
  await livro.update(req.body);
  res.json(livro);
};

exports.remove = async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);
  if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
  await livro.destroy();
  res.status(204).end();
};

exports.search = async (req, res) => {
  const query = req.query.q || '';
  const livros = await Livro.findAll({
    where: {
      [Op.or]: [
        { titulo: { [Op.like]: `%${query}%` } },
        { autor: { [Op.like]: `%${query}%` } },
        { isbn: { [Op.like]: `%${query}%` } },
      ],
    },
  });
  res.json(livros);
};
