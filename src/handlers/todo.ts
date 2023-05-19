import prisma from "../db";

export const createTodo = async (req, res, next) => {
    try {
        const todos = await prisma.todo.create({
            data: {
                title: req.body.title,
                dateVerify: req.body.dateVerify,
                belongsToId: req.user.id,
                monthYear: req.body.monthYear,
                belongsToCollectionId: req.body.collectionId,
                date: req.body.date,
            }
        });

        res.json({ todos: todos });
    } catch (e) {
        e.type = "createTodo";
        next(e);
    }
};
    
export const deleteTodo = async (req, res, next) => {
    try {
        const todo = await prisma.todo.delete({
            where: {
                id: req.body.id,
                belongsToId: req.user.id,
                belongsToCollectionId: req.body.collectionId,
            }
        });

        res.json({ delete: todo });
    } catch (e) {
        e.type = "deleteTodo";
        next(e);
    }
};

export const updateTodo = async (req, res, next) => {
    try {
        const todo = await prisma.todo.update({
            where: {
                id: req.body.id,
                belongsToId: req.user.id,
                belongsToCollectionId: req.body.collectionId,
            },
            data: {
                title: req.body.title,
                completed: req.body.completed,
                date: req.body.date,
                monthYear: req.body.monthYear,
                dateVerify: req.body.dateVerify,
            }
        });

        res.json({ updatedTodo: todo });
    } catch (e) {
        e.type = "updateTodo";
        next(e);
    }
};

export const getCollectionTodos = async (req, res, next) => {
    try {
        const todos = await prisma.todo.findMany({
            where: {
                belongsToId: req.user.id,
                belongsToCollectionId: req.body.collectionId,
            }
        });

        res.json({ todos: todos });
    } catch (e) {
        e.type = "getCollectionTodos";
        next(e);
    }
};

export const getOneTodo = async (req, res, next) => {
    try {
        const todo = await prisma.todo.findUnique({
            where: {
                id: req.body.id,
                belongsToId: req.user.id,
                belongsToCollectionId: req.body.collectionId,
            }
        });

        res.json({ todo: todo });
    } catch (e) {
        e.type = "getOneTodo";
        next(e);
    }
};
