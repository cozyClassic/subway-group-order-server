import { SoftDeleteEntity } from 'src/common/softDeleteInterface.entity';
import { Column } from 'typeorm';

export class User extends SoftDeleteEntity {
  @Column()
  username: string;

  @Column()
  email: string;
}
