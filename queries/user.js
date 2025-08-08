const { sequelize, DataTypes } = require("../database/db.js");
const UserModel = require("../models/User.js");

const bcrypt = require("bcrypt");
const saltRounds = 10;

// Modeli initialize et
const User = UserModel(sequelize, DataTypes);

async function createUser(json) {
  try {
    console.log("Create user başladı");
    // Password kaydedilmeden önce hashlenir.
    json.password = await bcrypt.hash(json.password, saltRounds);

    const user = await User.create({
      full_name: json.full_name,
      email: json.email,
      phone: json.phone,
      password: json.password,
      avatar: json.avatar,
      role: json.role,
      is_active: json.is_active,
    });
    console.log("Kullanıcı oluşturuldu:", user.toJSON());
    return user;
  } catch (error) {
    console.error("Create user hatası:", error.message);
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.error("Get user by email hatası:", error.message);
    throw error;
  }
}

module.exports = { createUser, getUserByEmail, User };
