import fs from 'fs';
import path from 'path';

const createAfile = (fileName, fileData) => {
    const filePath = path.join(path.resolve(), 'root', fileName);
    
    fs.writeFileSync(filePath, fileData);
    return { message: "File created successfully" };
};

export default createAfile;