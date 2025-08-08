const dotenv = require("dotenv");
const path = require("path");
const { fileURLToPath } = require("url");

const app = require("./app.js");
const db = require("./database/db.js");

// .env dosyasını manuel yükle
dotenv.config({ path: path.join(__dirname, ".env") });

const PORT = process.env.LOCAL_PORT || 3000;
console.log(`Port:  ${process.env.LOCAL_PORT}`);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
