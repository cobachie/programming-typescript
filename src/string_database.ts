type State = {
  [key: string]: string;
};

interface StringDatabase {
  state: State;
  get(key: string): string | null;
  set(key: string, value: string): void;
}

interface StringDatabaseConstructor {
  new (): StringDatabase;
  from(state: State): StringDatabase;
}

class StringDatabase implements StringDatabase {
  state: State = {};

  constructor() {}

  get(key: string): string | null {
    return key in this.state ? this.state[key] : null;
  }

  set(key: string, value: string): void {
    this.state[key] = value;
  }

  static from(state: State) {
    let db = new StringDatabase();
    for (let key in state) {
      db.set(key, state[key]);
    }
    return db;
  }
}

const state: State = { cat: 'meow' };
let db = StringDatabase.from(state);
console.log(db.get('cat'));
