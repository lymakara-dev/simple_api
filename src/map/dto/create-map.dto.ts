import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateMapDto {
  @IsString()
  @IsNotEmpty()
  name: string; // Name of the map

  @IsString()
  @IsOptional()
  description?: string; // Optional description

  @IsNumber()
  @IsNotEmpty()
  zoomLevel: number; // Zoom level of the map

  @IsNumber()
  @IsNotEmpty()
  latitude: number; // Latitude coordinate

  @IsNumber()
  @IsNotEmpty()
  longitude: number; // Longitude coordinate
}
