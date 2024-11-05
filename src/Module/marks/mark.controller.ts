import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { MarkService } from './mark.service';
import { CreateMarkDto } from './Dto/Create.Markdto';
import { UpdateMarkDto } from './Dto/Update.Markdto';

@Injectable()
@Controller('mark')
export class MarkController {
    constructor(private readonly markService: MarkService){}

    @Get()
        findAll(){
            return this.markService.findAll();
        }
    
        @Get(':id')
        findOne(@Param('id') id: number){
            return this.markService.findOne(id);
        }
    
        @Post()
        create(@Body() createMarkDto: CreateMarkDto){
            return this.markService.create(createMarkDto);
        }
    
        @Put(':id')
        update(@Param('id') id: number, @Body() updateMarkDto: UpdateMarkDto){
            return this.markService.update(id, updateMarkDto);
        }
    
        @Delete(':id')
        remove(@Param('id') id: number): Promise<void> {
            return this.markService.remove(id);
        }


}
