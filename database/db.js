// src/config/db.js
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.js").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: console.log, // Hata ayıklama için
  }
);

// Bağlantıyı test et
sequelize
  .authenticate()
  .then(() => console.log("Database bağlantısı başarılı!"))
  .catch((err) => console.error("Bağlantı hatası:", err));

module.exports = { sequelize, DataTypes };
