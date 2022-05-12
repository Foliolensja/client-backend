import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class Indices {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  ticker: string;

  @IsNotEmpty()
  @IsNumber()
  weight: number;
}

export class IndicesDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ValidateNested({ each: true })
  @Type(() => Indices)
  indices: Indices[];
}
