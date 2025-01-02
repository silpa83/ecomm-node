import express from 'express';

const app = express();

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

app.get("/", (_req, res) => {
    //console.log(req.method); // Logs the HTTP method (e.g., GET)
    res.send("Hello World");
  });
  app.get("/home", (_req, res) => {
    //console.log(req.method); // Logs the HTTP method (e.g., GET)
    res.send("This is home api");
  }); 
  app.get("/products", (_req, res) => {
    let products=[
        {
            "name":"Product 1",
            "price":34
        },
        {
            "name":"Product 2",
            "price":40
        }
    ]
    //console.log(req.method); // Logs the HTTP method (e.g., GET)
    //res.send("This is home api");
    res.json(products);
  }); 