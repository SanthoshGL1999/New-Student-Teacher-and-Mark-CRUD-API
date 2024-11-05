import { Repository } from 'typeorm';
import { TEACHERINFO } from './teacher entity/teacher.entity';
import { STUDENTINFO } from '../student/Student entity/student.entity';
import { CreateTeacherDto } from './TeacherDto/Create.Teacherdto';
import { UpdateTeacherDto } from './TeacherDto/Update.Teacherdto';
export declare class TeacherService {
    private teacherRepository;
    private studentRepository;
    constructor(teacherRepository: Repository<TEACHERINFO>, studentRepository: Repository<STUDENTINFO>);
    findAll(): Promise<TEACHERINFO[]>;
    findOne(ID: number): Promise<TEACHERINFO>;
    create(createTeacherDto: CreateTeacherDto): Promise<TEACHERINFO>;
    update(ID: number, updateTeacherDto: UpdateTeacherDto): Promise<void>;
    remove(ID: number): Promise<void>;
}
