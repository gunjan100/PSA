module.exports=(req,res,next)=>{
    res.header("Content-Range", "clients 0-10/10")
    next()
}