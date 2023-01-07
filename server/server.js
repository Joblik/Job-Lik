const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const routerPost = require("./routes/post");
const userRoutes= require("./routes/user")

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/post", routerPost);
app.use("/users", userRoutes);

const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert('./joblik.json'),
});

const PORT = 5000;
//{force:true}
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`server listening on PORT ${PORT}...`));
});
