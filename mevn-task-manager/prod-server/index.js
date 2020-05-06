import express from 'express';
import { registerRoutes } from './routes';
import { setEnvironment } from './config/env';
import { connectToDB } from './config/db';

const app = express();
const port = 3000;

setEnvironment(app);
connectToDB();
registerRoutes(app);

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('running server in development mode');
  } else {
    return res.sendFile('index.html', { root: __dirname + '/../dist/' });
  }
});

app.listen(port, () => {
  console.log(`MEVN app listening at http://localhost:${port} in ${process.env.NODE_ENV} mode`);
});