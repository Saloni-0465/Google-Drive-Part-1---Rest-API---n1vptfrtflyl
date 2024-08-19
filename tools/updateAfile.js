import fs from 'fs';
import path from 'path';

const updateAfile = (fileName, updatedFileName, newFileData) => {
    const oldFilePath = path.join(path.resolve(), 'root', fileName);
    const newFilePath = path.join(path.resolve(), 'root', updatedFileName);

    if (fs.existsSync(oldFilePath)) {
        fs.renameSync(oldFilePath, newFilePath);
        fs.writeFileSync(newFilePath, newFileData);
        return { message: "File updated successfully" };
    } else {
        return { message: "File does not exist" };
    }
};

export default updateAfile;

