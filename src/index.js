#!/usr/bin/env node

import fs from 'fs';
import { readDir, resolve } from './util';

const { log } = console;

const rootPath = process.cwd();
const reg = /^\p{Unified_Ideograph}{1,}\./u;
readDir(rootPath).then((files) => {
  files.forEach((file) => {
    if (!reg.test(file)) {
      return;
    }
    const newName = file.replace(reg, '');
    fs.rename(resolve(rootPath, file), resolve(rootPath, newName), (err) => {
      if (err) {
        log(err);
      }
    });
  });
});
