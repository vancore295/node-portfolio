import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as socketIo from 'socket.io';
import { createServer, Server } from 'http';

import initRoutes from './routes';
import { Message } from './models/message';

const app = express();
const chatServer: Server = createServer(app);
const io: SocketIO.Server = socketIo(chatServer);
const chatPort = (process.env.CHAT_PORT || 8081);

dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  initRoutes(app);

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.listen(app.get('port'), () => {
    console.log('Node Portfolio running on port: ' + app.get('port'));
  });

  chatServer.listen(chatPort, function () {
    console.log('Running chat server on port %s', chatPort);
  });

  io.on('connect', (socket: any) => {
    console.log('Connected client on port %s.', chatPort);
    socket.on('message', (m: Message) => {
        console.log('[server](message): %s', JSON.stringify(m));
        this.io.emit('message', m);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
  });
});

export { app };
