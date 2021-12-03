import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';
import { send } from 'process';

dotenv.config();

const server = express();

server.set('viws engine', 'mustache');
server.set('viws',path.join(__dirname, 'viws'));
server.engine('mustache',mustache());

server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

server.use((req, res)=>{
    res.send('página não encontrada');
});

server.listen(process.env.PORT);