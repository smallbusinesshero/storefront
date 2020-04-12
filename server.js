const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const node_dev = process.env.NODE_ENV !== 'production';
const stage_dev = process.env.STAGE === 'development';
const app = next({ dev: node_dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    // We use the x-forwared-proto header here
    // Please check https://devcenter.heroku.com/articles/http-routing#heroku-headers
    if (!stage_dev && !node_dev && req.headers['x-forwarded-proto'] !== 'https') {
      res.writeHead(301, { Location: 'https://' + req.headers.host + req.url });
      res.end();
    } else {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }

  }).listen(PORT, err => {
    if (err) throw err;
    console.log(`> Server is listening on port ${PORT}`);
  })
});

