module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true, // Telefon isteğe bağlı
        validate: {
          is: /^[0-9]+$/, // Regex: Sadece rakamlar
          len: [10, 15], // 10 ila 15 karakter arasında olmalı
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6, 100],
        },
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true, // Avatar isteğe bağlı
      },
      role: {
        type: DataTypes.ENUM("user", "admin", "moderator"),
        defaultValue: "user",
      },
      last_login: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Users",
      timestamps: true, // created_at ve updated_at kolonlarını ekler
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return User;
};
