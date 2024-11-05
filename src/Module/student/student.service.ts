import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { STUDENTINFO } from './Student entity/student.entity';
import { Repository } from 'typeorm';
import { TEACHERINFO } from '../teacher/teacher entity/teacher.entity';
import { CreateStudentDto } from './StudentDto/Create.Studentdto';
import { UpdateStudentDto } from './StudentDto/Update.Studentdto';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(STUDENTINFO)
        private studentRepository: Repository<STUDENTINFO>,
        @InjectRepository(TEACHERINFO)
        private teacherRepository: Repository<TEACHERINFO>,
    ) {}

    findAll(): Promise<STUDENTINFO[]> {
        return this.studentRepository.find();
    }

    findOne(ID: number): Promise<STUDENTINFO> {
        return this.studentRepository.findOneBy({ID});
    }

    create(createStudentDto: CreateStudentDto): Promise<STUDENTINFO> {
        return this.studentRepository.save(createStudentDto);
    }

    async update(ID: number, updateStudentDto:UpdateStudentDto): Promise<void> {
        await this.studentRepository.update(ID,updateStudentDto);
        
    }

    async remove(ID: number): Promise<void> {
        await this.teacherRepository.delete({student:{ID}});
        await this.studentRepository.delete(ID);
        
    }
}
