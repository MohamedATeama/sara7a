import QRCode from 'qrcode';
import Message from '../../database/models/message.model.js';

export const messages = async (req, res) => {
  var url = `${req.protocol}://${req.get('host')}/user/${req.session.userId}`;

  let QRCodeUrl;
  await QRCode.toDataURL(url)
    .then(url => {
      QRCodeUrl = url;
    })
    .catch(err => {
      console.error(err)
    })
  
  const messages = await Message.find({user: req.session.userId});

  if (req.session.isLoggedIn) {
    res.render('messages.ejs', { session: req.session, url, QRCodeUrl, messages });
  } else {
    res.redirect('/login');
  }
}