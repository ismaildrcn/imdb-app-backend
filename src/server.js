require("dotenv").config({ path: __dirname + "/.env" }); // src/.env dosyasını yükler
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
