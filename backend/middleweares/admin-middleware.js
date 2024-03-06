const adminMiddleware = (req, resp, next) => {
  try {
    const isAdminData = req.user.isAdmin;
    if (!isAdminData) {
      return resp.status(401).json({ msg: "Sorry you not Admin !!" });
    }
    next();
    // resp.status(200).json({msg:req.user.isAdmin})
  } catch (error) {
    console.log(error);
  }
};

module.exports = adminMiddleware;
