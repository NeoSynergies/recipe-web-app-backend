// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express/index.d.ts
import express from 'express';
import http from 'http';
var cors = require('cors');
import { genericEntities } from './rest';

const config = {
  port: 3000,
  assetPath: './assets'
};

process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})

const app = express();
app.use(express.json({limit: '1mb'}));
app.use('/assets', express.static(config.assetPath));
app.use(cors());

genericEntities(app);

http.createServer(app).listen(config.port, () => {
  console.log('Ready to cook on port ' + config.port);
});
