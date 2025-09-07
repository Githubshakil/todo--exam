const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const registrationSchema = require("../model/registrationSchema");

let registrationControllertwo = async (req, res) => {
  //CRUD= create read update delete
  let data = new registrationSchema({
    username: "shakil mahmud",
    email: "shakilmahmud@gmail.com",
    password: "123456",
  });
  data.save()
  res.send(data);
};

module.exports = registrationControllertwo;
