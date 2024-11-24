import { createServer } from '@triplit/server';
 
const port = +(process.env.PORT || 8080);
 
const startServer = createServer({
  storage: 'sqlite',
  verboseLogs: true,
});
 
const dbServer = startServer(port);
 
console.log('running on port', port);
process.on('SIGINT', function () {
  dbServer.close(() => {
    console.log('Shutting down server... ');
    process.exit();
  });
});