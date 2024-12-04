const http = require('http');

const server = http.createServer((req, res) => {
  res.on('error', (err) => {
    console.error('Request error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

//Error handling for server errors
server.on('error', (err) => {
  console.error('Server error:', err);
  // Handle server errors appropriately, such as restarting the server or logging the error.
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});