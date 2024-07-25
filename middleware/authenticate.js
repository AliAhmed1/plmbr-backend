const authenticate = (req, res, next) => {
    const userType = req.headers['user-type'];
    if (!userType) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.userType = userType;
    next();
  };
  
  module.exports = authenticate;
  