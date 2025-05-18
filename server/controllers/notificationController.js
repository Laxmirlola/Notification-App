const User = require("../models/User");
const Notification = require("../models/Notification");
const { sendEmail, sendSMS, sendInApp } = require("../utils/senders");

exports.sendNotification = async (req, res) => {
  const { userId, type, message } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Create the notification in DB
    const notification = await Notification.create({ userId, type, message });

    try {
      if (type === "email") await sendEmail(user.email, message);
      else if (type === "sms") await sendSMS(user.phone, message);
      else await sendInApp(userId, message);

      notification.status = "sent";
    } catch (err) {
      notification.status = "failed";
    }

    await notification.save();
    res.status(200).json({ message: "Notification processed", notification });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUserNotifications = async (req, res) => {
  const { id } = req.params;

  try {
    const notifications = await Notification.find({ userId: id }).sort({
      createdAt: -1,
    });
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: "Error fetching notifications" });
  }
};
