import express from 'express';
import createAfile from './tools/createAfile.js';
import deleteAFile from './tools/deleteAFile.js';
import getAFile from './tools/getAFile.js';
import getAllFileName from './tools/getAllFilename.js';
import updateAfile from './tools/updateAfile.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/file', (req, res) => {
    const result = getAllFileName();
    res.json(result);
});

app.get('/file/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const result = getAFile(fileName);
    res.json(result);
});

app.post('/file/create', (req, res) => {
    const { fileName, fileData } = req.body;
    const result = createAfile(fileName, fileData);
    res.json(result);
});

app.put('/file/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const { updatedFileName, newFileData } = req.body;
    const result = updateAfile(fileName, updatedFileName, newFileData);
    res.json(result);
});

app.delete('/file/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const result = deleteAFile(fileName);
    res.json(result);
});

app.listen(port, () => {
    console.log(`File management server running at http://localhost:${port}`);
});

export default app;