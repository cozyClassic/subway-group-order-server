import { SoftDeleteEntity } from 'src/common/softDeleteInterface.entity';
import { Entity, Column } from 'typeorm';

@Entity()
class Merchandise extends SoftDeleteEntity {
  @Column()
  dbType: string;

  static get getDbTypes() {
    return {
      foodsHandMade: 'foodsHandMade',
      foodsReadyMade: 'foodsReadyMade',
    };
  }
}

export { Merchandise };
