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
  reportedRisk: number;

  @IsNumber()
  @IsNotEmpty()
  netWorth: number;

  @IsNumber()
  @IsNotEmpty()
  salary: number;
}
