const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs")

let registrationController = async (req, res) => {
  let { username, email, password, confirmPassword } = req.body;

  let errors = {
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  };

  if (!username) {
    errors.usernameError = "User name required";
  }
  if (!email) {
    errors.emailError = "email required";
  }
  if (!password) {
    errors.passwordError = "password required";
  }
  if (!confirmPassword) {
    errors.confirmPasswordError = "confirm password required";
  }

  if (password !== confirmPassword) {
    if (!errors.confirmPasswordError) {
      errors.confirmPasswordError = "confirm password not matched";
    }
  }
  bcrypt.hash(password, 10, function (err, hash) {
    if(err){
        res.send("error")
    }else{
        password = hash
    }
  });

  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!pattern.test(email)) {
    errors.emailError = "Please Enter a valid email";
  }
  if (
    errors.usernameError ||
    errors.emailError ||
    errors.passwordError ||
    errors.confirmPasswordError
  ) {
    res.send({ errors: errors });
  } else {
    // ======================================================
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shakilmahmud007@gmail.com",
        pass: "zkra nclr wbwz tchx",
      },
    });
    // ==================================================
    const info = await transporter.sendMail({
      from: "Todo App",
      to: "shakilfreelancer1987@gmail.com",
      subject: `Hello ${username}`,

      html: '<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tr><td align="center" style="padding:24px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;border-collapse:collapse;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.05)"><tr><td align="center" style="padding:28px 24px 12px 24px;background:#0f172a"><a href="{{WEBSITE_URL}}" target="_blank" style="text-decoration:none"><img src="https://via.placeholder.com/140x40?text={{COMPANY}}" width="140" height="40" alt="{{COMPANY_NAME}}" style="display:block;border:0;outline:0;text-decoration:none"></a><div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#cbd5e1;letter-spacing:.4px;margin-top:8px">Building fast, beautiful web experiences</div></td></tr><tr><td style="padding:28px 28px 0 28px"><h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:32px;color:#0f172a">Need a modern website that converts?</h1><p style="margin:12px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:24px;color:#334155">Hi {{FIRST_NAME}}, we’re<strong>{{COMPANY_NAME}}</strong>—a web design & development studio helping startups and small businesses go live fast with responsive, SEO‑friendly websites.</p></td></tr><tr><td style="padding:18px 28px 4px 28px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tr><td width="33.33%" valign="top" style="padding:12px 8px"><div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;font-weight:700">⚡ Fast</div><div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#475569;line-height:20px">Optimized performance & clean code.</div></td><td width="33.33%" valign="top" style="padding:12px 8px"><div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;font-weight:700">📱 Responsive</div><div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#475569;line-height:20px">Great on mobile, tablet, and desktop.</div></td><td width="33.33%" valign="top" style="padding:12px 8px"><div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;font-weight:700">🎯 Conversion‑focused</div><div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#475569;line-height:20px">Designed to turn visitors into clients.</div></td></tr></table></td></tr><tr><td align="center" style="padding:12px 28px 24px 28px"><a href="{{BOOKING_LINK}}" target="_blank" style="display:inline-block;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:18px;color:#fff;background:#2563eb;text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:700">Get a Free 15‑min Consultation</a><div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#64748b;margin-top:8px">Or reply to this email with your goals & timeline.</div></td></tr><tr><td style="padding:0 28px 8px 28px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tr><td align="center" style="padding:8px"><img src="https://via.placeholder.com/170x110?text=Project+1" width="170" height="110" alt="Portfolio project 1" style="display:block;border:0;border-radius:10px;width:100%;max-width:170px;height:auto"></td><td align="center" style="padding:8px"><img src="https://via.placeholder.com/170x110?text=Project+2" width="170" height="110" alt="Portfolio project 2" style="display:block;border:0;border-radius:10px;width:100%;max-width:170px;height:auto"></td><td align="center" style="padding:8px"><img src="https://via.placeholder.com/170x110?text=Project+3" width="170" height="110" alt="Portfolio project 3" style="display:block;border:0;border-radius:10px;width:100%;max-width:170px;height:auto"></td></tr></table></td></tr><tr><td style="padding:18px 24px 28px 24px;background:#0f172a"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tr></table>', // HTML body
    });

    console.log("Message sent:", info.messageId);

    // transporter.sendMail()
    res.send({ sucess:{
        username:username,
        email:email,
        password:password
    }});
  }
};

module.exports = registrationController;


