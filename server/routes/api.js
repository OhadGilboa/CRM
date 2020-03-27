const express = require("express");
const router = express.Router();
const Sequelize = require(`sequelize`);
const sequelize = new Sequelize("mysql://root:12345678@localhost/sql_join");


router.get("/Clients", async (req, res) => {
  let result = await sequelize.query("SELECT * FROM Clients")
  res.send(result)
});


// router.delete("/transaction/:id", async (req, res) => {
//   const id = req.params.id;
//   console.log(id)
//   await Transaction.findByIdAndDelete({_id: id})
//   console.log(id)
//   res.end();
// });

module.exports = router;
