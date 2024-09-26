const router = require("express").Router()
const todoController = require("../controller/todoController")

router
    .post("/", todoController.createTodo)
    .get("/", todoController.readTodo)
    .put("/:id", todoController.updateTodo)
    .delete("/:id", todoController.deleteTodo)

module.exports = router