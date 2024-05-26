"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./provinsi/router"));
const router_2 = __importDefault(require("./kabupaten/router"));
const router_3 = __importDefault(require("./daftarSekolah/router"));
const serviceRouter = (0, express_1.default)();
serviceRouter.use('/provinsi', router_1.default);
serviceRouter.use('/kabupaten', router_2.default);
serviceRouter.use('/daftar-sekolah', router_3.default);
exports.default = serviceRouter;
