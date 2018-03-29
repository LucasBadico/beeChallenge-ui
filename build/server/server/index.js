// import 'ignore-styles'
import 'babel-polyfill';
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import log from '../log';
import appRenderer from './middleware/app-renderer';
import { getAvailablePort } from '../utils';

process.on('uncaughtException', function (ex) {
  log.error(ex);
  process.exit(1);
});

var app = express();
var server = http.createServer(app);
// Heroku requires you to use process.env.PORT
var port = undefined || undefined;

// Don't rate limit heroku
app.enable('trust proxy');

// Parse bodies as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In development, we use webpack server
if ('production' === 'production') {
  app.use(express.static('build/client', {
    maxAge: '180 days'
  }));
}

app.use(appRenderer);
server.listen(port, function () {
  log.info('Node app is running on port ' + port);
});

export { app, server };
//# sourceMappingURL=index.js.map