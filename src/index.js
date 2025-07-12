import parser from "./parser.js";

const genDiff = (filepath1, filepath2) => {
  console.log('filepath1:', parser(filepath1));
  console.log('filepath2:', parser(filepath2));
}

export default genDiff;