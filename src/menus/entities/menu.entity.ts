import { SoftDeleteEntity } from 'src/common/softDeleteInterface.entity';
import { Column } from 'typeorm';

// 메뉴는 카테고리를 갖는다.
// 메뉴는 재료가 들어간 것이 있고, 아닌 것이 있음 (샌드위치, 랩, 샐러드 vs 음료, 쿠키)
// 재료가 들어가는 메뉴 중에는, 옵션이 변경이 가능한 것이 있고, 아닌 것이 있음. 이는 카테고리와는 다른 것임.

/*
1. 샌드위치는 다음과 같은 옵션을 갖는다.
2. 재료를 추가한다. - 옵션에 따른 가격을 추가한다.
3. 재료를 제외한다. - 옵션에 따른 가격을 제거한다.
4. 재료를 모두 제거한다. - 옵션에 따른 가격을 제거한다.
5. 기본 가격을 설정한다.
6. 재료마다 추가가 가능하고 안한 것들이 있다. (ex. 랩 - 재료 전체 변경 불가, 빵이 일반 빵이 아닌 랩용 토르티야 임, 샐러드 - 빵 선택 불가)
*/

/* 메뉴는 다음과 같은 옵션을 갖는다.
1. 
*/

export class Menu extends SoftDeleteEntity {
  @Column()
  name: string;

  @Column()
  basePrice: number;

  @Column()
  isImmutable: boolean;

  @Column()
  isWithIngredients: boolean;
}
