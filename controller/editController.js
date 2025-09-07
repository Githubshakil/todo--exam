const registrationSchema = require('../model/registrationSchema')


let editController = async (req,res)=>{
 let dataupdate = await registrationSchema.findByIdAndUpdate({_id:"68bc1cc9b5ac2ac438d65dae"},{username: 'shakil'},{new: true})
  res.send(dataupdate)
}

module.exports = editController