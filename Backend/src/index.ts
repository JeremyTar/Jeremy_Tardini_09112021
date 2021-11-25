import * as express from 'express';
import * as cors from 'cors';
import { UserRouter } from './routes/userRoute'
import { PostRouter } from './routes/postRoute';
import { createConnection, getConnection } from 'typeorm';

createConnection().then(async () => {
    await getConnection()
    console.log("Connected to MySQL")
});

const app = express()
    .use(cors())
    .use(express.json())
    .use(UserRouter)
    .use(PostRouter)

app.listen(3000, () => {
    return console.log('My Node App listening on port 3000');
});