import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Course } from './course.entity';
import { v4 as uuidV4 } from 'uuid';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Course, (course) => course.tags)
  courses: Course[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }

    this.id = uuidV4();
  }
}
