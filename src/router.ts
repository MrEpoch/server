import { Router } from "express";
import { createCollection, deleteCollection, getCollection, getCollections, updateCollection } from "./handlers/collection";
import { createTodo, deleteTodo, getCollectionTodos, getOneTodo, updateTodo } from "./handlers/todo";
import { body } from "express-validator";
import { handleError } from "./modules/middlewares";

const router = Router();

router.get("/collections", getCollections);

router.get("/collection/:id", getCollection);
router.post("/collection", 
            body('title').isString().isLength({ min: 1, max: 12}), 
            handleError,
    createCollection);
router.put("/collection/:id", 
            body('favourites').isBoolean(),
            handleError,
    updateCollection);
router.delete("/collection/:id",  
            handleError,
    deleteCollection);

router.get("/todos", getCollectionTodos);

router.get("/todo/:id", getOneTodo);
router.post("/todo/", 
            body('title').isString().isLength({ min: 0, max: 50 }),
            body('dateVerify').isNumeric(),
            body('yearMonth').isString(),
            body('date').isString(),
            handleError,
    createTodo);
router.put("/todo/:id", 
            body('title').isString().isLength({ min: 0, max: 50 }),
            body('completed').isBoolean(),
            body('date').isString(),
            body('yearMonth').isString(),
            body('dateVerify').isNumeric(),
            handleError,
    updateTodo);
router.delete("/todo/:id", 
            handleError,
    deleteTodo);


export default router;
