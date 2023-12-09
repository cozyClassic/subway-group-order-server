import { SoftDeleteEntity } from 'src/common/softDeleteInterface.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends SoftDeleteEntity {
  @Column()
  username: string;

  @Column()
  email: string;
}
