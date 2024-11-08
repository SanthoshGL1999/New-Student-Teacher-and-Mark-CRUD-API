"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STUDENTINFO = void 0;
const mark_entity_1 = require("../../marks/Entity/mark.entity");
const teacher_entity_1 = require("../../teacher/teacher entity/teacher.entity");
const typeorm_1 = require("typeorm");
let STUDENTINFO = class STUDENTINFO {
};
exports.STUDENTINFO = STUDENTINFO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], STUDENTINFO.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], STUDENTINFO.prototype, "ROLLNO", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], STUDENTINFO.prototype, "NAME", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], STUDENTINFO.prototype, "AGE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], STUDENTINFO.prototype, "COURSE", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], STUDENTINFO.prototype, "EMAIL_ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], STUDENTINFO.prototype, "MARK_ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], STUDENTINFO.prototype, "TEACHER_ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], STUDENTINFO.prototype, "CLASS", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => teacher_entity_1.TEACHERINFO, (teacher) => teacher.student),
    __metadata("design:type", teacher_entity_1.TEACHERINFO)
], STUDENTINFO.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => mark_entity_1.MARKS, (mark) => mark.student),
    __metadata("design:type", mark_entity_1.MARKS)
], STUDENTINFO.prototype, "mark", void 0);
exports.STUDENTINFO = STUDENTINFO = __decorate([
    (0, typeorm_1.Entity)()
], STUDENTINFO);
//# sourceMappingURL=student.entity.js.map