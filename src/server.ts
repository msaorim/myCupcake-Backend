import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { router } from './routes'

const port = 3300;
const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'images'))
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            err: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal error service'
    })
})

app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}...`)
});
