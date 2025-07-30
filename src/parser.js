import fs from 'fs';
import path from 'path'
import yaml from 'js-yaml'

const parser = (file) => {
    const ext = path.extname(file)
    const absolutePath = path.resolve(process.cwd(), file)
    const fileContents = fs.readFileSync(absolutePath, 'utf-8')

    if (ext === '.json') {
      return JSON.parse(fileContents)
    } else if (ext === '.yml' || ext === '.yaml') {
      return yaml.load(fileContents)
    }
}

export default parser;