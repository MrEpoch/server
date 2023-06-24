"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = function (err, req, res, next) {
    if (err.type === "input") {
        res.status(401).json({ message: "Wrong input" });
    }
    else if (err.type === "createTodo") {
        res.status(400).json({ message: "Could not create todo" });
    }
    else if (err.type === "deleteTodo") {
        res.status(400).json({ message: "Could not delete todo" });
    }
    else if (err.type === "updateTodo") {
        res.status(400).json({ message: "Could not update todo" });
    }
    else if (err.type === "getOneCollection") {
        res.status(400).json({ message: "Could not get collection" });
    }
    else if (err.type === "createCollection") {
        res.status(400).json({ message: "Could not create collection" });
    }
    else if (err.type === "updateCollection") {
        res.status(400).json({ message: "Could not update collection" });
    }
    else if (err.type === "deleteCollection") {
        res.status(400).json({ message: "Could not delete collection" });
    }
    else if (err.type === "signIn") {
        res.status(400).json({ message: "Could not sign in" });
    }
    else if (err.type === "signUp") {
        res.status(400).json({ message: "Could not create new user" });
    }
    else if (err.type === "folderCreation") {
        res.status(400).json({ message: "Could not user folder" });
    }
    else if (err.type === "readUserFolder") {
        res.status(400).json({ message: "Could not get user data" });
    }
    else {
        res.status(500).json({ message: "Server side error" });
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.js.map