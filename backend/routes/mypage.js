const router = require('express').Router();
const passport = require('passport');
const User = require('../models/User');
const athenticates = require('../middlewares/authenticates');
const authenticateToken = athenticates.authenticateToken;

// mypage - user 정보
router.get('/', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(404).json('User not found!');
    }
    const { password, ...userInfo } = user._doc;
    res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
