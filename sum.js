const sumreq = (req, res) => {
  console.log("You are in sum request handler page");

  const arrofchunks = [];

  req.on("data", (chunk) => {
    arrofchunks.push(chunk);
  });

  req.on("end", () => {
    const parsedData = Buffer.concat(arrofchunks).toString();
    console.log("Raw Data:", parsedData); // e.g., num1=5&num2=4

    const param = new URLSearchParams(parsedData);
    const formData = Object.fromEntries(param);
    console.log("Parsed Form Data:", formData); // { num1: '5', num2: '4' }

    const num1 = parseFloat(formData.num1);
    const num2 = parseFloat(formData.num2);
    const sum = num1 + num2;

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Result</title></head>
        <body>
          <h1>${num1} + ${num2} = ${sum}</h1>
          <a href="/calcy">Go Back</a>
        </body>
      </html>
    `);
    res.end();
  });


};


module.exports = sumreq;
