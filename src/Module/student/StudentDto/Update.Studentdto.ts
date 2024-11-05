import { IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateStudentDto{

    @IsNumber()
    @IsOptional()
    ROLLNO?: number;
    
    @IsString()
    @IsOptional()
    NAME?: string;

    @IsNumber()
    @IsOptional()
    AGE?: number;

    @IsString()
    @IsOptional()
    COURSE?: string;

    @IsString()
    @IsOptional()
    EMAIL_ID?: string;

    @IsString()
    @IsOptional()
    CLASS?: number;
}