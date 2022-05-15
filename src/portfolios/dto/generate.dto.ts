import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GenerateDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsNumber()
  @IsNotEmpty()
  reported_risk: number;

  @IsNumber()
  @IsNotEmpty()
  net_worth: number;

  @IsNumber()
  @IsNotEmpty()
  salary: number;
}
