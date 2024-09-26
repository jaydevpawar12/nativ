const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")

exports.createTodo = asyncHandler(async (req, res) => {
    const { title, desc, priority } = req.body
    const result = await Todo.create({ title, desc, priority })
    res.status(200).json({ status: 200, message: "Todo Create Successfully", data: result })
})
exports.readTodo = asyncHandler(async (req, res) => {

    const result = await Todo.find()
    res.status(200).json({ status: 200, message: "Todo read Successfully", data: result })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await Todo.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({ status: 200, message: "Todo Update Successfully", data: result })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.status(200).json({ status: 200, message: "Todo delete Successfully" })
})