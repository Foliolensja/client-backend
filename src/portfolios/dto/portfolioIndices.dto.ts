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
  ticker: string;

  @IsNotEmpty()
  @IsNumber()
  weight: number;
}

class Tracker {
  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;
}

export class IndicesDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ValidateNested({ each: true })
  @Type(() => Indices)
  indices: Indices[];

  @ValidateNested({ each: true })
  @Type(() => Tracker)
  tracker: Tracker[];
}
