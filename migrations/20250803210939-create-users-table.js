"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true, // Geçerli bir email adresi olmalı
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true, // Telefon isteğe bağlı
        validate: {
          is: /^[0-9]+$/, // Regex: Sadece rakamlar
          len: [10, 15], // 10 ila 15 karakter arasında olmalı
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [6, 100], // Şifre en az 6 karakter olmalı
        },
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true, // Avatar isteğe bağlı
      },
      role: {
        type: Sequelize.ENUM("user", "admin", "moderator"),
        defaultValue: "user",
      },
      last_login: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
