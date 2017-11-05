// Listen on a specific host via the HOST environment variable
const host = '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = 8080;

const corsProxy = require('cors-anywhere');

corsProxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log(`Running CORS Anywhere on ${host}:${port}`);
});
