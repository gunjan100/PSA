const Conatct = require("../models/contact-models");


const contact = async (req, resp) => {
    try {
      await Conatct.create(req.body);
      resp.send({ success: true, message: "data send Successfully.." });
    } catch (error) {
      console.error(error);
      resp.send({ success: false, message: "data not send" });
    }
  };
  
  module.exports = contact