import parser from "./parser.js";

const genDiff = (filepath1, filepath2) => {
  const obj1 = parser(filepath1);
  const obj2 = parser(filepath2);

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  const uniqueKeys = new Set([...keys1, ...keys2])

  const sortedUniqueKeys = Array.from(uniqueKeys).sort()

  let result = [];

  for (const key of sortedUniqueKeys) {
    if (keys1.includes(key) && keys2.includes(key)) {
      if (obj1[key] === obj2[key]) {
        result.push(`   ${key}: ${obj1[key]}`)
      } else {
        result.push(` - ${key}: ${obj1[key]}`)
        result.push(` + ${key}: ${obj2[key]}`)
      }
    }
    else if (keys1.includes(key) && !keys2.includes(key)) {
      result.push(` - ${key}: ${obj1[key]}`)
    }
    else if (!keys1.includes(key) && keys2.includes(key)) {
      result.push(` + ${key}: ${obj2[key]}`)
    }
  }
  console.log(`{\n${result.join('\n')}\n}`)
  return `{\n${result.join('\n')}\n}`
}

export default genDiff;