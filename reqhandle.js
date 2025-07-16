 const sumreq = require('./sum');

const reqhandle = (req, res) => {
  console.log(req.url);
     
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is title</title></head>");
    res.write(`
      <body>
        <h1>Welcome user! Click the button below to go to the calculator page.</h1>
        <a href="/calcy">Go to Calculator</a>
      </body>
    `);
    res.write("</html>");
    return res.end();
  }

  else if (req.url === "/calcy") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>This is calculator page</h1>
          <form method="POST" action="/submit">
            <br/>
            <input type="number" placeholder="Enter your first number" name="num1" /><br/>
            <input type="number" placeholder="Enter your second number" name="num2" /><br/>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }
 else if(req.url=== '/submit' && req.method=== 'POST'){

         sumreq(req,res);


        

         
 }
  else {
    // For unknown routes
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>404 - Page Not Found</h1>");
    return res.end();
  }
};

module.exports = reqhandle;
