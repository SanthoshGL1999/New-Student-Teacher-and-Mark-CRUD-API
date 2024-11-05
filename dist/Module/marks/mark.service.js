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
exports.MarkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mark_entity_1 = require("./Entity/mark.entity");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("../student/Student entity/student.entity");
let MarkService = class MarkService {
    constructor(marksRepository, studentRepository) {
        this.marksRepository = marksRepository;
        this.studentRepository = studentRepository;
    }
    findAll() {
        return this.marksRepository.find();
    }
    findOne(id) {
        return this.marksRepository.findOneBy({ id });
    }
    async create(createMarkDto) {
        const student = await this.studentRepository.findOne({ where: { ID: createMarkDto.studentID } });
        if (!student) {
            throw new Error('Student not found');
        }
        return this.marksRepository.save(createMarkDto);
    }
    async update(id, updateMarkDto) {
        await this.marksRepository.update(id, updateMarkDto);
    }
    async remove(id) {
        await this.marksRepository.delete(id);
    }
};
exports.MarkService = MarkService;
exports.MarkService = MarkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mark_entity_1.MARKS)),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.STUDENTINFO)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MarkService);
//# sourceMappingURL=mark.service.js.map