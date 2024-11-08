import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";



export class UpdateMarkDto{

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    TAMIL: number

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    ENGLISH: number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    MATHS: number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    SCIENCE: number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    SOCIAL_SCIENCE: number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    MARK_ID?: number;
}