const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/user')

const tokenDecode = (req) => {
  const bearerHeader = req.headers['authorization']
  if(bearerHeader){
    const bearer = bearerHeader.split(' ')[1]
    try {
      const tokenDecode = jsonwebtoken.verify(
        bearer,
        process.env.TOKEN_SECRET_KEY
      )
      return tokenDecode
    }catch {
      return false
    }
  }else{
    return false
  }
}

exports.verifyToken = async (req, res, next) => {
  const tokenDecode = tokenDecode(req)
  if(tokenDecode){
    const user = await User.findById(tokenDecode.id)
    if(!user) return res.status(401).json('Unauthorized')
    req.user = user
    next()
  }else{
    res.status(401).json('Unauthorized')
  }
}