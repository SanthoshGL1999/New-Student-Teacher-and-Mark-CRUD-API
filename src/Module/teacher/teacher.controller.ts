import { Body, Controller, Delete, Get, Param, Post, Put, Request } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './TeacherDto/Create.Teacherdto';
import { UpdateTeacherDto } from './TeacherDto/Update.Teacherdto';

@Controller('teacher')
export class TeacherController {
        constructor(private readonly teacherService: TeacherService) {}
    
        @Get()
        findAll(){
            return this.teacherService.findAll();
        }
    
        @Get(':id')
        findOne(@Param('id') id: number){
            return this.teacherService.findOne(id);
        }
    
        @Post()
        create(@Body() createTeacherDto: CreateTeacherDto){
            return this.teacherService.create(createTeacherDto);
        }
    
        @Put(':id')
        update(@Param('id') id: number, @Body() updateTeacherDto: UpdateTeacherDto){
            return this.teacherService.update(id, updateTeacherDto);
        }
    
        @Delete(':id')
        remove(@Param('id') id: number): Promise<void> {
            return this.teacherService.remove(id);
        }
}
