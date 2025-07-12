import fs from 'fs';
import path from 'path'

const parser = (file) => {
    const absolutePath = path.resolve(process.cwd(), file)
    return JSON.parse(fs.readFileSync(absolutePath, 'utf-8'))
}

export default parser;