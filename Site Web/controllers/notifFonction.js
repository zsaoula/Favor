const UserModel = require("../models/user.model");

module.exports.addNotification = (userId, notification) => {
    UserModel.findById(userId, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            user.notif.push(notification);
            user.save();
        }
    });
};