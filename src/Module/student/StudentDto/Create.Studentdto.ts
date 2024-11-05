import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateStudentDto{

    @IsNumber()
    @IsNotEmpty()
    ROLLNO: number;

    @IsString()
    @IsNotEmpty()
    NAME: string;

    @IsNumber()
    @IsNotEmpty()
    AGE: number;

    @IsString()
    @IsNotEmpty()
    COURSE: string;

    @IsString()
    @IsNotEmpty()
    EMAIL_ID: string;

    @IsString()
    @IsNotEmpty()
    CLASS: number;
    
}


