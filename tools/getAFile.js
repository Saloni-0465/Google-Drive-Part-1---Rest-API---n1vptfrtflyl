import fs from 'fs';
import path from 'path';

const getAFile = (fileName) => {
    const filePath = path.join(path.resolve(), 'root', fileName);

    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return { fileContent };
    } else {
        return { message: "File does not exist" };
    }
};

export default getAFile;
