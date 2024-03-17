"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Match_1 = __importDefault(require("../classes/Match"));
const match1 = new Match_1.default("Germany", "Poland", 3, 1, "2023-11-04", "10:00");
const match2 = new Match_1.default("France", "Belgium", 3, 2, "2023-10-18", " 16:00");
const match3 = new Match_1.default("Croatia", "Senegal", 2, 0, "2023-12-12", " 18:00");
exports.default = [match1, match2, match3];
