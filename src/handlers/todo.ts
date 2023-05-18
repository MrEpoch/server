import prisma from "../db";

const getTodos = async (req, res, next) => {
    try {
        const todos = await prisma.todo.create({
            data: {
                title: req.body.title,
                belongsToId: req.user.id,
                belongsToCollectionId: req.body.collectionId,
            }
        });

        res.json({ todos: todos });
    } catch (e) {
        e.type = "getTodos";
        next(e);
    }
};

const getOneTodo = async (req, res, next) => {
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
