// run by typing node jsonserver

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
server.use(function(req, res, next) {
    setTimeout(next, 1000);
});
server.use(middlewares);
server.use('/rest', router);

server.listen(4000, () => {
    console.log('JSON Server is running on port 4000');
});