#!/usr/bin/env node

import fs from 'fs';
import { readDir, resolve } from './util';

const { log } = console;

const rootPath = process.cwd();
const reg = /^[\p{Unified_Ideograph}|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]{1,}\./u;
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
