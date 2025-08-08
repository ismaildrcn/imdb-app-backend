module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6, 100],
        },
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      role: {
        type: DataTypes.ENUM("user", "admin", "moderator"),
        defaultValue: "user",
      },
      lastLogin: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Users",
      timestamps: true, // created_at ve updated_at kolonlarını ekler
    }
  );
  return User;
};
