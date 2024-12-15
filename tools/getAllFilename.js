import fs from 'fs';
import path from 'path';

const getAllFileName = () => {
    const directoryPath = path.join(path.resolve(), 'root');

    if (fs.existsSync(directoryPath)) {
        const files = fs.readdirSync(directoryPath);
        return { files };
    } else {
        return { message: "Directory does not exist" };
    }
};

export default getAllFileName;


