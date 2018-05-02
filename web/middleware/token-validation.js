"use strict";

const User = require("../../models/user");

function tokenValidationFactory(options) {
  return function tokenValidation(req, res, next) {
    const opt = options;
    const path = `${req.method}:${req.url}`;
    if (1) {
      next();
    } else {
      const token = req.headers["x-access-token"];
      if (token) {
        User.verifyToken(token, (err, user) => {
          if (err) {
            return res
              .status(401)
              .send({
                status: false,
                message: "Invalid token! Please login again."
              })
              .end();
          }
          global.SocketToken = token;
          global.userId = user.userId;
          req.userId = user.userId;
          return next();
        });
      } else {
        return res.render("index.html");
      }
    }
  };
}

module.exports = tokenValidationFactory;
