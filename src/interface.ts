// 型エイリアス
// type Food = {
//   calories: number;
//   tasty: boolean;
// };

// type Sushi = Food & {
//   salty: boolean;
// };

// type Cake = Food & {
//   sweet: boolean;
// };

// ほぼ同じことをインタフェースで書く
interface Food {
  calories: number;
  tasty: boolean;
}

interface Sushi extends Food {
  salty: boolean;
}

interface Cake extends Food {
  sweet: boolean;
}

// 宣言のマージ
// 同名でインタフェースを宣言してもエラーにならない
interface Cake extends Food {
  fruits: boolean;
}
