const http = require('http');
const { port } = require('./config');
const getRedirectUrl = require('./get_redirect_url');

const server = http.createServer((req, res) => {
  const redirectUrl = getRedirectUrl(req.url);

  res.writeHead(302, { Location: redirectUrl });
  res.end();
});

server.listen(port, () => {
  console.log(`Redirect server is listening on port ${port}`);
});
