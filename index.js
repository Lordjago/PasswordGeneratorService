
const express = require("express");
const app = express();
const PasswordGeneratorService = require("./password");

app.get("/generate-password", async(req, res) => {
  const password = await PasswordGeneratorService();
  res.send(`Your new password is: ${password}`);
});

app.listen(3000, () => console.log("Server is listening on port 3000"));