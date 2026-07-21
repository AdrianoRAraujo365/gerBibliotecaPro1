const { Livro, Emprestimo } = require('../models');

exports.list = async (req, res) => {
  const emprestimos = await Emprestimo.findAll({ include: [Livro] });
  res.json(emprestimos);
};

exports.create = async (req, res) => {
  try {
    const { livro_id, usuario_id } = req.body;
    const livro = await Livro.findByPk(livro_id);
    if (!livro || livro.status !== 'Disponível') {
      return res.status(400).json({ error: 'Livro não disponível para empréstimo' });
    }

    const dataEmp = req.body.data_emprestimo || new Date().toISOString().split('T')[0];
    const dataPrev = req.body.data_prevista || new Date(new Date(dataEmp).setDate(new Date(dataEmp).getDate() + 14)).toISOString().split('T')[0];

    const emprestimo = await Emprestimo.create({
      ...req.body,
      data_emprestimo: dataEmp,
      data_prevista: dataPrev,
      status: 'Ativo',
    });

    await livro.update({ status: 'Emprestado' });
    res.status(201).json(emprestimo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.return = async (req, res) => {
  const emprestimo = await Emprestimo.findByPk(req.params.id);
  if (!emprestimo) return res.status(404).json({ error: 'Empréstimo não encontrado' });
  if (emprestimo.status !== 'Ativo') return res.status(400).json({ error: 'Empréstimo já devolvido' });

  emprestimo.data_devolucao = req.body.data_devolucao || new Date().toISOString().split('T')[0];
  emprestimo.status = 'Devolvido';
  await emprestimo.save();

  const livro = await Livro.findByPk(emprestimo.livro_id);
  if (livro) await livro.update({ status: 'Disponível' });

  res.json(emprestimo);
};

exports.remove = async (req, res) => {
  const emprestimo = await Emprestimo.findByPk(req.params.id);
  if (!emprestimo) return res.status(404).json({ error: 'Empréstimo não encontrado' });
  await emprestimo.destroy();
  res.status(204).end();
};
