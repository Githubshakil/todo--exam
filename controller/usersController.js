const registrationSchema = require('../model/registrationSchema')


let usersController =async (req,res)=>{
  let data = await registrationSchema.findOne({username: 'shakil mahmud'})
 
  res.send(data)
}


module.exports = usersController