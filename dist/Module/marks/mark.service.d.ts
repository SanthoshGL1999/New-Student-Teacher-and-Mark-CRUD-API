import { MARKS } from './Entity/mark.entity';
import { Repository } from 'typeorm';
import { STUDENTINFO } from '../student/Student entity/student.entity';
import { CreateMarkDto } from './Dto/Create.Markdto';
import { UpdateMarkDto } from './Dto/Update.Markdto';
export declare class MarkService {
    private marksRepository;
    private studentRepository;
    constructor(marksRepository: Repository<MARKS>, studentRepository: Repository<STUDENTINFO>);
    findAll(): Promise<MARKS[]>;
    findOne(id: number): Promise<MARKS>;
    create(createMarkDto: CreateMarkDto): Promise<MARKS>;
    update(id: number, updateMarkDto: UpdateMarkDto): Promise<void>;
    remove(id: number): Promise<void>;
}
