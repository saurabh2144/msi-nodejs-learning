const http= require('http');

const reqhandle= require('./reqhandle');

const server =http.createServer(reqhandle);

server.listen(3005,()=>{console.log("the port is running on 3005");}
)