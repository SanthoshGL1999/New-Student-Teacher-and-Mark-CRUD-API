"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkModule = void 0;
const common_1 = require("@nestjs/common");
const mark_service_1 = require("./mark.service");
const mark_controller_1 = require("./mark.controller");
const mark_entity_1 = require("./Entity/mark.entity");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("../student/Student entity/student.entity");
const teacher_entity_1 = require("../teacher/teacher entity/teacher.entity");
let MarkModule = class MarkModule {
};
exports.MarkModule = MarkModule;
exports.MarkModule = MarkModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([mark_entity_1.MARKS, student_entity_1.STUDENTINFO, teacher_entity_1.TEACHERINFO])],
        providers: [mark_service_1.MarkService],
        controllers: [mark_controller_1.MarkController]
    })
], MarkModule);
//# sourceMappingURL=mark.module.js.map