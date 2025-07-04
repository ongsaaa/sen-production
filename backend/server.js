import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');


// Add this with your other routes in server.js
app.get('/', (req, res) => {
  res.send('Backend server is running! Welcome to the API.');
});

app.use('/api', router);

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!", error);
})

export default app;