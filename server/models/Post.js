module.exports = (Sequelize, Datatype) => {
  const Post = Sequelize.define("Post", {
    title: {
      type: Datatype.STRING,
      allowNull: false,
    },
    description: {
      type: Datatype.TEXT,
      allowNull: false,
    },
    image: {
      type: Datatype.TEXT,
      allowNull: false,
    },
    adress: {
      type: Datatype.TEXT,
      allowNull: false,
    },
  });
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };
  return Post;
};
