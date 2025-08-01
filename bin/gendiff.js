#!/usr/bin/env node

import { Command } from 'commander'
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
      genDiff(filepath1, filepath2)
  })
  .parse()