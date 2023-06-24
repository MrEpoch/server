"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
var express_validator_1 = require("express-validator");
var handleError = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(404).json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.handleError = handleError;
//# sourceMappingURL=middlewares.js.map