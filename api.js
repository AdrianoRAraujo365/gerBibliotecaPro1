const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');
const usuarioController = require('../controllers/usuarioController');
const emprestimoController = require('../controllers/emprestimoController');

/**
 * @openapi
 * /api/livros:
 *   get:
 *     summary: Lista todos os livros
 *     responses:
 *       200:
 *         description: Lista de livros
 */
router.get('/livros', livroController.list);
router.post('/livros', livroController.create);
router.put('/livros/:id', livroController.update);
router.delete('/livros/:id', livroController.remove);
router.get('/search/livros', livroController.search);

/**
 * @openapi
 * /api/usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get('/usuarios', usuarioController.list);
router.post('/usuarios', usuarioController.create);
router.put('/usuarios/:id', usuarioController.update);
router.delete('/usuarios/:id', usuarioController.remove);

/**
 * @openapi
 * /api/emprestimos:
 *   get:
 *     summary: Lista todos os empréstimos
 *     responses:
 *       200:
 *         description: Lista de empréstimos
 */
router.get('/emprestimos', emprestimoController.list);
router.post('/emprestimos', emprestimoController.create);
router.put('/emprestimos/:id/devolver', emprestimoController.return);
router.delete('/emprestimos/:id', emprestimoController.remove);

module.exports = router;
