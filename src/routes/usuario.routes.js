const express = require('express');

const router = express.Router();

const usuarioController = require('../controllers/usuario.controoller');
//rota para mostrar todos
router.get('/', usuarioController.findAll);

//rota para criar novo usuário
router.post('/', usuarioController.create);

//rota para mostrar usuário específicado por id
router.get('/:id', usuarioController.findById);

//rota para atualização de usuario
router.put('/:id', usuarioController.update);

//rota para deletar usuario
router.delete('/:id', usuarioController.delete);

module.exports = router;