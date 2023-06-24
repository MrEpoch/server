"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var cors_1 = __importDefault(require("cors"));
var user_1 = require("./handlers/user");
var auth_1 = require("./modules/auth");
var express_validator_1 = require("express-validator");
var middlewares_1 = require("./modules/middlewares");
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
app.post('/login', (0, express_validator_1.body)('username').isString().isLength({ min: 0, max: 30 }), (0, express_validator_1.body)('password').isString().isLength({ min: 1 }), middlewares_1.handleError, user_1.signIn);
app.post('/signup', (0, express_validator_1.body)('username').isString().isLength({ min: 0, max: 30 }), (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password').isString().isLength({ min: 1 }), middlewares_1.handleError, user_1.createNewUser);
app.use("/api", auth_1.protectRoute, router_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map