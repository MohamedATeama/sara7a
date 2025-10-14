import User from "../../database/models/user.model.js";

export const register = (req, res) => {
  res.render('register.ejs', {error: req.query.error, session: null});
}

export const handleRegister = async (req, res) => {
  const isExist = await User.findOne({ email: req.body.email });
  if (isExist) {
    return res.redirect('/register?error=email already exists.');
  }
  await User.create(req.body);
  res.redirect('/login');
}