import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './TeacherDto/Create.Teacherdto';
import { UpdateTeacherDto } from './TeacherDto/Update.Teacherdto';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    findAll(): Promise<import("./teacher entity/teacher.entity").TEACHERINFO[]>;
    findOne(id: number): Promise<import("./teacher entity/teacher.entity").TEACHERINFO>;
    create(createTeacherDto: CreateTeacherDto): Promise<import("./teacher entity/teacher.entity").TEACHERINFO>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<void>;
    remove(id: number): Promise<void>;
}
