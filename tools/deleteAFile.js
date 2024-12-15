import fs from 'fs';
import path from 'path';

const deleteAFile = (fileName) => {
    const filePath = path.join(path.resolve(), 'root', fileName);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return { message: "File Deleted Successfully" };
    } else {
        return { message: "File does not exist" };
    }
};

export default deleteAFile;