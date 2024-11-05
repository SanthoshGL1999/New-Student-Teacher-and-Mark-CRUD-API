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
exports.TEACHERINFO = void 0;
const student_entity_1 = require("../../student/Student entity/student.entity");
const typeorm_1 = require("typeorm");
let TEACHERINFO = class TEACHERINFO {
};
exports.TEACHERINFO = TEACHERINFO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TEACHERINFO.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TEACHERINFO.prototype, "NAME", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TEACHERINFO.prototype, "SUBJECT", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TEACHERINFO.prototype, "CLASS", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => student_entity_1.STUDENTINFO, (student) => student.teacher),
    (0, typeorm_1.JoinColumn)({ name: 'studentID' }),
    __metadata("design:type", student_entity_1.STUDENTINFO)
], TEACHERINFO.prototype, "student", void 0);
exports.TEACHERINFO = TEACHERINFO = __decorate([
    (0, typeorm_1.Entity)()
], TEACHERINFO);
//# sourceMappingURL=teacher.entity.js.map