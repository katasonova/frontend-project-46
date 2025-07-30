import genDiff from "../src";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

const expected1 = fs.readFileSync(getFixturePath('expected1.txt'), 'utf-8')
// const expected2 = fs.readFileSync(getFixturePath('expected2.txt'), 'utf-8')

test('compares different flat JSON files', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(expected1)
});

test('compare different flat YAML/YML files', () => {
  expect(genDiff(getFixturePath('filepath1.yaml'), getFixturePath('filepath2.yaml'))).toBe(expected1)
})

// 1. Edge cases:

// What happens with two identical files?
// What happens with two completely empty files?
// What about one empty file and one with data?

// 2. Different data combinations:

// Files where all keys are different (no overlap)
// Files where all keys are the same but all values differ
// Files with different data types (strings, numbers, booleans)

// 3. Error cases:

// What if one of the files doesn't exist?
// What if the file isn't valid JSON?