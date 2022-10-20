import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  per_page?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  page?: number;
}
