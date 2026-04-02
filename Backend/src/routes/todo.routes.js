const express = require('express');
const router = express.Router();
const showlog = require('../middlewares/showlog.middleware.js');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todo.controller.js');
const {validateTodo} = require('../middlewares/validateTodo.middleware.js');

router.get('/', getTodo);
router.post('/',validateTodo, createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;

