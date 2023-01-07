const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const routerPost = require("./routes/post");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/post", routerPost);

const PORT = 5000;
//{force:true}
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`server listening on PORT ${PORT}...`));
});
