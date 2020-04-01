const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.route("/order/:id").get(orderController.getOrderById);

module.exports = router;
