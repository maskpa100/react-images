const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://maskpa100.ru', // Замените на адрес вашего удаленного сервера
      changeOrigin: true,
    })
  );
};