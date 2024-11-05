import { Body, Controller, Get, Injectable, Param, Post, Put, Delete, Request } from '@nestjs/common';
import { StudentService } from './student.service';
import { STUDENTINFO } from './Student entity/student.entity';

@Injectable()
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    findAll(){
        return this.studentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.studentService.findOne(id);
    }

    @Post()
    create(@Body() student: STUDENTINFO){
        return this.studentService.create(student);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() student: STUDENTINFO){
        return this.studentService.update(id, student );
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.studentService.remove(id);
    }
}
