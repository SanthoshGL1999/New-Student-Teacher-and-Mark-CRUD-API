import { STUDENTINFO } from './Student entity/student.entity';
import { Repository } from 'typeorm';
import { TEACHERINFO } from '../teacher/teacher entity/teacher.entity';
import { CreateStudentDto } from './StudentDto/Create.Studentdto';
import { UpdateStudentDto } from './StudentDto/Update.Studentdto';
export declare class StudentService {
    private studentRepository;
    private teacherRepository;
    constructor(studentRepository: Repository<STUDENTINFO>, teacherRepository: Repository<TEACHERINFO>);
    findAll(): Promise<STUDENTINFO[]>;
    findOne(ID: number): Promise<STUDENTINFO>;
    create(createStudentDto: CreateStudentDto): Promise<STUDENTINFO>;
    update(ID: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    remove(ID: number): Promise<void>;
}
