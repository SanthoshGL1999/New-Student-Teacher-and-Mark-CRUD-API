import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MARKS } from './Entity/mark.entity';
import { Repository } from 'typeorm';
import { STUDENTINFO } from '../student/Student entity/student.entity';
import { promises } from 'dns';
import { CreateMarkDto } from './Dto/Create.Markdto';
import { UpdateMarkDto } from './Dto/Update.Markdto';

@Injectable()
export class MarkService {
    constructor(@InjectRepository(MARKS) private marksRepository: Repository<MARKS>,
                @InjectRepository(STUDENTINFO)private studentRepository: Repository<STUDENTINFO>,
                ){}

        findAll(): Promise<MARKS[]>{
            return this.marksRepository.find();
        }

        findOne(id: number): Promise<MARKS>{
            return this.marksRepository.findOneBy({id});
        }

        async create(createMarkDto:CreateMarkDto): Promise<MARKS>{
            const student = await this.studentRepository.findOne({where:{ID:createMarkDto.studentID}})
            if (!student) {
                throw new Error('Student not found');
              }
              return this.marksRepository.save(createMarkDto);
              }

        async update(id: number,updateMarkDto:UpdateMarkDto): Promise<void>{
            await this.marksRepository.update(id,updateMarkDto);
        }

        async remove(id: number): Promise<void>{
            await this.marksRepository.delete(id);
        }
}

