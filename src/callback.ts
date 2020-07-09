import * as fs from 'fs';
import { readFile } from 'fs';

let fpath = '/var/log/apache2/access_log';

function readFilePromise(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}
// Apache サーバーのアクセスログからデータを読み込みます
fs.readFile(fpath, { encoding: 'utf8' }, (error, data) => {
  if (error) {
    console.error('error reading!', error);
    return;
  }
  console.info('success reading', data);
});

// 同時に、同じアクセスログにデータを書き込みます
fs.appendFile(fpath, 'New access log entry', (error) => {
  if (error) {
    console.error('error writing', error);
  }
});

function appendAndReadPromise(path: string, data: string): Promise<string> {
  return appendPromise(path, data)
    .then(() => appendAndReadPromise(path))
    .catch((error) => console.error(error));
}

function appendAndRead(
  path: string,
  data: string,
  cb: (error: Error | null, result: string | null) => void
) {
  appendFile(path, data, (error) => {
    if (error) {
      return cb(error, null);
    }
    readFile(path, (error, result) => {
      if (error) {
        return cb(error, null);
      }
      cb(null, result);
    });
  });
}

type Executor<T, E extends Error> = (
  resolve: (result: T) => void,
  reject: (error: E) => void
) => void;

class Promise<T, E extends Error> {
  constructor(f: Executor<T, E>) {}
  then<U, F extends Error>(g: (result: T) => Promise<U, F> | U): Promise<U, F>;
  catch<U, F extends Error>(g: (error: E) => Promise<U, F> | U): Promise<U, F>;
}
