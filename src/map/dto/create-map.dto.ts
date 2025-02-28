import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateMapDto {
  @IsString()
  @IsNotEmpty()
  name: string; //hello 2

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  zoomLevel: number;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;
}
