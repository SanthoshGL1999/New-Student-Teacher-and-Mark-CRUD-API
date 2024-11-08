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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./Student entity/student.entity");
const typeorm_2 = require("typeorm");
const teacher_entity_1 = require("../teacher/teacher entity/teacher.entity");
const mark_entity_1 = require("../marks/Entity/mark.entity");
let StudentService = class StudentService {
    constructor(studentRepository, teacherRepository, markRepository) {
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
        this.markRepository = markRepository;
    }
    findAll() {
        return this.studentRepository.find();
    }
    findOne(ID) {
        return this.studentRepository.findOneBy({ ID });
    }
    create(createStudentDto) {
        return this.studentRepository.save(createStudentDto);
    }
    async update(ID, updateStudentDto) {
        await this.studentRepository.update(ID, updateStudentDto);
    }
    async remove(ID) {
        await this.teacherRepository.delete({ student: { ID } });
        await this.studentRepository.delete(ID);
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.STUDENTINFO)),
    __param(1, (0, typeorm_1.InjectRepository)(teacher_entity_1.TEACHERINFO)),
    __param(2, (0, typeorm_1.InjectRepository)(mark_entity_1.MARKS)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StudentService);
//# sourceMappingURL=student.service.js.map