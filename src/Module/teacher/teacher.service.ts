import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TEACHERINFO } from './teacher entity/teacher.entity';
import { STUDENTINFO } from '../student/Student entity/student.entity';
import { CreateTeacherDto } from './TeacherDto/Create.Teacherdto';
import { UpdateTeacherDto } from './TeacherDto/Update.Teacherdto';

@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(TEACHERINFO)
        private teacherRepository: Repository<TEACHERINFO>,
        @InjectRepository(STUDENTINFO)
        private studentRepository: Repository<STUDENTINFO>,
    ) {}

    findAll(): Promise<TEACHERINFO[]> {
        return this.teacherRepository.find();
    }

    findOne(ID: number): Promise<TEACHERINFO> {
        return this.teacherRepository.findOneBy({ ID });
    }

    async create(createTeacherDto: CreateTeacherDto): Promise<TEACHERINFO> {
        const student = await this.studentRepository.findOne({ where: { ID: createTeacherDto.studentID } });
    if (!student) {
      throw new Error('Student not found');
    }
    return this.teacherRepository.save(createTeacherDto);
    }

    async update(ID: number, updateTeacherDto: UpdateTeacherDto): Promise<void> {
        await this.teacherRepository.update(ID,updateTeacherDto);
    }

    async remove(ID: number): Promise<void> {
        await this.teacherRepository.delete(ID);
    }
}
