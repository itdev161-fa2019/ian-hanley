import express from 'express';

//initiate express application
const app = express();

//api endpoints
app.get('/', (req, res) => res.send('http get request to root api endpoint'));

//connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));
