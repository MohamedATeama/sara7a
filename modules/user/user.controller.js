import Message from "../../database/models/message.model.js";
import User from "../../database/models/user.model.js";

export const user = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render('user.ejs', { username: user.name, userId: user._id, session: req.session });
}

export const sendMsg = async (req, res) => {
  req.body.user = req.params.id;
  await Message.create(req.body);
  res.redirect(`/user/${req.params.id}`);
}

export const logout = (req, res) => {
  req.session.destroy((err) => {
    res.redirect(`login`);
  });
}