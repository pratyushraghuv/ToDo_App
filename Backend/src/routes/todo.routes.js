const express = require('express');
const router = express.Router();
const showlog = require('../middlewares/showlog.middleware.js');
const { createTodo, getTodos, updateTodos, deleteTodo } = require('../controllers/todo.controller.js');
const {validateTodo} = require('../middlewares/validateTodo.middleware.js');
const auth = require('../middlewares/auth.middleware.js');

router.get('/',auth, showlog, getTodos);
router.post('/',auth,validateTodo, createTodo);
router.put('/:id',auth, updateTodos);
router.delete('/:id',auth, deleteTodo);

module.exports = router;


