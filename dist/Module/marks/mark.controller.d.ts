import { MarkService } from './mark.service';
import { CreateMarkDto } from './Dto/Create.Markdto';
import { UpdateMarkDto } from './Dto/Update.Markdto';
export declare class MarkController {
    private readonly markService;
    constructor(markService: MarkService);
    findAll(): Promise<import("./Entity/mark.entity").MARKS[]>;
    findOne(id: number): Promise<import("./Entity/mark.entity").MARKS>;
    create(createMarkDto: CreateMarkDto): Promise<import("./Entity/mark.entity").MARKS>;
    update(id: number, updateMarkDto: UpdateMarkDto): Promise<void>;
    remove(id: number): Promise<void>;
}
