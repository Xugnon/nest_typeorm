import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-course';

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {}
