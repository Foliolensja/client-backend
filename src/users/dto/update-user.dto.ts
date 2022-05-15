import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsDate()
  @IsNotEmpty()
  dob: Date;

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @IsNumber()
  @IsNotEmpty()
  riskRating: number;

  @IsNumber()
  @IsNotEmpty()
  netWorth: number;
}
