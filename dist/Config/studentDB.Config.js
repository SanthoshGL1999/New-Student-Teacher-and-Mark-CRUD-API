"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseService = void 0;
const common_1 = require("@nestjs/common");
const student_entity_1 = require("../Module/student/Student entity/student.entity");
const teacher_entity_1 = require("../Module/teacher/teacher entity/teacher.entity");
const mark_entity_1 = require("../Module/marks/Entity/mark.entity");
let DataBaseService = class DataBaseService {
    createTypeOrmOptions() {
        return {
            type: 'mssql',
            host: 'localhost',
            port: 1433,
            username: 'Krion',
            password: 'qwerty',
            database: 'STUDENTDB',
            entities: [student_entity_1.STUDENTINFO, teacher_entity_1.TEACHERINFO, mark_entity_1.MARKS],
            options: { trustServerCertificate: true,
                enableArithAbort: true,
            }
        };
    }
};
exports.DataBaseService = DataBaseService;
exports.DataBaseService = DataBaseService = __decorate([
    (0, common_1.Injectable)()
], DataBaseService);
//# sourceMappingURL=studentDB.Config.js.map