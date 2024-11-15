const express = require('express');
const router = express.Router();
const Todo = require('../model/todoData'); // Adjust the path as necessary

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Get operation
router.get('/', async (req, res) => {
    try {
        const data = await Todo.find();
        res.status(200).json(data);    
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

// Post operation
router.post('/add', async (req, res) => {
    try {
        const item = req.body;
        const newTodo = new Todo(item);
        const savedData = await newTodo.save();
        res.status(201).json({ message: 'Post successful', savedData });
    } catch (error) {
        res.status(400).json({ message: 'Post unsuccessful', error });
    }
});

// Update operation
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({ message: 'No data found with that ID' });
        }
        res.status(200).json({ message: 'Update successful', updatedData });
    } catch (error) {
        res.status(400).json({ message: 'Update unsuccessful', error });
    }
});

// Delete operation
router.delete('/remove/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedData = await Todo.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ message: 'No data found with that ID' });
        }
        res.status(200).json({ message: 'Delete successful', deletedData });
    } catch (error) {
        res.status(400).json({ message: 'Delete unsuccessful', error });
    }
});

module.exports = router;
