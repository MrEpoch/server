import prisma from "../db";

export const createTodo = async (req, res, next) => {
    try {
        const todos = await prisma.todo.create({
            data: {
                title: req.body.title,
                dateVerify: req.body.dateVerify,
                belongsToCollectionId: req.body.belongsToCollectionId,
                yearMonth: req.body.yearMonth,
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
                id: req.params.id,
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
                id: req.params.id,
            },
            data: {
                title: req.body.title,
                completed: req.body.completed,
                date: req.body.date,
                yearMonth: req.body.monthYear,
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
        const todos = await prisma.userCollection.findUnique({
            where: {
                id: req.body.belongsToCollectionId
            }, include: {
                collectionTodos: true,
            }
        });

        res.json({ todos: todos.collectionTodos });
    } catch (e) {
        e.type = "getCollectionTodos";
        next(e);
    }
};

export const getOneTodo = async (req, res, next) => {
    try {
        const todo = await prisma.todo.findFirst({
            where: {
                id: req.params.id,
                belongsToCollectionId: req.body.collectionId,
            }
        });

        res.json({ todo: todo });
    } catch (e) {
        e.type = "getOneTodo";
        next(e);
    }
};
