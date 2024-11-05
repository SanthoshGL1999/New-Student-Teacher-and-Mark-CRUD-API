import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateTeacherDto{

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    NAME: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    SUBJECT: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    CLASS: number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    TEACHER_ID?: number;
}