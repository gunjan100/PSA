const service = require("../models/service");

const serviceData = async (req, resp) => {
  try {
    const serviceData = await service.find();
    if (!serviceData) {
      return resp.send({ success: false, message: "data not found" });
    }
    resp.send({ success: true, sdata: serviceData });
  } catch (error) {
    resp.send({ success: false, message: error });
  }
};

module.exports = serviceData;
