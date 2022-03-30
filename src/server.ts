import express from "express";

const app = express();

app.get("/test", (resquest, response) => {
  return response.send("GET method test");
});

app.post("/test-post", (request, response) => {
  return response.send("POST method test");
});

app.listen(3000, () => console.log("Server is running..."));