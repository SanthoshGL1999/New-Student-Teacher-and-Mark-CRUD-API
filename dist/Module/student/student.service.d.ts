import { STUDENTINFO } from './Student entity/student.entity';
import { Repository } from 'typeorm';
import { TEACHERINFO } from '../teacher/teacher entity/teacher.entity';
import { CreateStudentDto } from './StudentDto/Create.Studentdto';
import { UpdateStudentDto } from './StudentDto/Update.Studentdto';
import { MARKS } from '../marks/Entity/mark.entity';
export declare class StudentService {
    private studentRepository;
    private teacherRepository;
    private markRepository;
    constructor(studentRepository: Repository<STUDENTINFO>, teacherRepository: Repository<TEACHERINFO>, markRepository: Repository<MARKS>);
    findAll(): Promise<STUDENTINFO[]>;
    findOne(ID: number): Promise<STUDENTINFO>;
    create(createStudentDto: CreateStudentDto): Promise<STUDENTINFO>;
    update(ID: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    remove(ID: number): Promise<void>;
}
