import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

//Création des routes
app.get('/', (req, res) => res.send('Hello World !'));

app.listen(PORT, () => console.log(`Le serveur est lancé sur le port: http://localhost:${PORT}`));