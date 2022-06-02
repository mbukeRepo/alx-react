import * as data from './notifications.json';
import { normalize, schema } from 'normalizr';
const getAllNotificationsByUser = (userId) => {
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;
  const userNotifications = [];
  for (const key in notifications) {
    if (notifications[key].author == userId) {
      userNotifications.push(messages[notifications[key].context]);
    }
  }
  return userNotifications;
};

const user = new schema.Entity("users");
const message = new schema.Entity("messages",{}, {
  idAttribute: "guid"
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

const normalized = normalize(data.default, [notification]);

console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'));
