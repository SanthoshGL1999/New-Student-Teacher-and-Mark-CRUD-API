import { StudentService } from './student.service';
import { STUDENTINFO } from './Student entity/student.entity';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(): Promise<STUDENTINFO[]>;
    findOne(id: number): Promise<STUDENTINFO>;
    create(student: STUDENTINFO): Promise<STUDENTINFO>;
    update(id: number, student: STUDENTINFO): Promise<void>;
    remove(id: number): Promise<void>;
}
