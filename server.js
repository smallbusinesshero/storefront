const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    // We use the x-forwared-proto header here
    // Please check https://devcenter.heroku.com/articles/http-routing#heroku-headers
    if (!dev && req.headers['x-forwarded-proto'] !== 'https') {
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

