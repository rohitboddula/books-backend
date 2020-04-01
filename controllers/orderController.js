const { Order } = require("../models/Order");

exports.getOrderById = async (req, res) => {
  try {
    const { id } = params.id;

    const order = await Orders.find({ user_id: id });
    if (order) {
      res.status(200).json({
        order
      });
    } else {
      res.status(404).json({
        message: "Order details not found"
      });
    }
  } catch (error) {
    handleError(error, res);
  }
};

// complaint no: 4869242
//
// 24012400
