import fs from 'fs';
import path from 'path';

export const readDir = dir => new Promise((resolve, reject) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      reject(err);
    } else {
      resolve(files);
    }
  });
});

export const isDir = spath => fs.statSync(spath).isDirectory();

export const isExisted = spath => fs.existsSync(spath);
export const resolve = (...params) => path.resolve(...params);
