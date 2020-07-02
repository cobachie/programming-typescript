export {};

type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// チェスのゲームを表す
class Game {
  private pieces: Piece[];

  constructor() {
    this.pieces = Game.makePieces();
  }

  private static makePieces() {
    return [
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),

      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),

      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),
    ];
  }
}

// チェスの駒
abstract class Piece {
  protected position: Position;

  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }

  // サブクラスでオーバーライドできる（サブクラスでの実装は必須ではない）
  moveTo(position: Position) {
    this.position = position;
  }

  // 抽象メソッドはサブクラスに実装しなくてはいけない
  abstract canMoveTo(position: Position): boolean;
}

// 駒の位置
class Position {
  constructor(private file: File, private rank: Rank) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

// 駒の種類
class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Queen extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Bishop extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Knight extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Rook extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Pawn extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}

const game = new Game();
