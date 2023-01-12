const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");

module.exports.addNotification = async (userId, notification) => {
    await UserModel.findByIdAndUpdate(
        userId,
        { $addToSet: { notif: notification } },
        { new: true, upsert: true }
    );
};