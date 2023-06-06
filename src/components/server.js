const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Create a proxy middleware
const proxyMiddleware = createProxyMiddleware({
  target: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=94fb045e895244aba2a43e406006d8cb', // Replace with your target URL
  changeOrigin: true,
});

// Use the proxy middleware for the desired route
app.use('/api', proxyMiddleware);

// Add your other routes and server code

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
