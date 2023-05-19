import { Router } from "express";
import { createCollection, deleteCollection, getCollection, getCollections, updateCollection } from "./handlers/collection";
import { createTodo, deleteTodo, getCollectionTodos, getOneTodo, updateTodo } from "./handlers/todo";
import { body } from "express-validator";
import { handleError } from "./modules/middlewares";

const router = Router();

router.get("/collections", getCollections);

router.get("/collection", getCollection);
router.post("/collection", 
            body('title').isString().isLength({ min: 0, max: 20}), 
            body('id').isString(),
            handleError,
    createCollection);
router.update("/collection", 
            body('favourites').isBoolean(),
            body('id').isString(),
            handleError,
    updateCollection);
router.delete("/collection",  
            body("id").isString(),
            handleError,
    deleteCollection);

router.get("/todos", getCollectionTodos);

router.get("/todo", getOneTodo);
router.post("/todo", 
            body('title').isString().isLength({ min: 0, max: 100 }),
            body('dateVerify').isNumeric(),
            body('yearMonth').isString().isLength({ min: 0, max: 7 }),
            body('date').isString(),
            body('completed').isBoolean(),
            handleError,
    createTodo);
router.update("/todo", 
            body('title').isString().isLength({ min: 0, max: 100 }),
            body('completed').isBoolean(),
            body('date').isString(),
            body('yearMonth').isString().isLength({ min: 0, max: 7 }),
            body('dateVerify').isNumeric(),
            handleError,
    updateTodo);
router.delete("/todo", 
            body("id").isString(),
            handleError,
    deleteTodo);


export default router;
