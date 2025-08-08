const { sequelize, DataTypes } = require("../database/db.js");
const UserModel = require("../models/User.js");

// Modeli initialize et
const User = UserModel(sequelize, DataTypes);

async function createUser() {
  try {
    console.log("Create user başladı");
    const newUser = await User.create({
      email: "test@example.com",
      password: "test123",
      role: "user", // Opsiyonel, default değer var
      isActive: true, // Opsiyonel, default değer var
    });
    console.log("Kullanıcı oluşturuldu:", newUser.toJSON());
    return newUser;
  } catch (error) {
    console.error("Create user hatası:", error.message);
    throw error;
  }
}

module.exports = { createUser, User };
