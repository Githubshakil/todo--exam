const registrationSchema = require('../model/registrationSchema')

let deleteController = async (req, res) =>{
    let deleteData = await registrationSchema.findByIdAndDelete({_id:"68bc1cc9b5ac2ac438d65dae"})
    res.send(deleteData)
}

module.exports = deleteController