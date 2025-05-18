exports.sendEmail = async (email, message) => {
  console.log(`📧 Email sent to ${email}: ${message}`);
};

exports.sendSMS = async (phone, message) => {
  console.log(`📱 SMS sent to ${phone}: ${message}`);
};

exports.sendInApp = async (userId, message) => {
  console.log(`🧾 In-app notification for user ${userId}: ${message}`);
};
