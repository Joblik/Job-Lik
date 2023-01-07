module.exports = (Sequelize, Datatype) => {
  const User = Sequelize.define("User", {
    firstName: {
      type: Datatype.STRING,
      allowNull: false,
    },
    lastName: {
      type: Datatype.STRING,
      allowNull: false,
    },
    password: {
      type: Datatype.STRING,
      allowNull: false,
    },
    email: {
      type: Datatype.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: Datatype.STRING,
      allowNull: true,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };
  return User;
};
