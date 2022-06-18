import * as data from './notifications.json';
import { normalize, schema } from 'normalizr';
export const getAllNotificationsByUser = (userId) => {
  const newData = data.default.filter(item => item.author.id === userId );
  const user = new schema.Entity("users");
  const message = new schema.Entity("messages",{}, {
    idAttribute: "guid"
  });
  const notification = new schema.Entity("notifications", {
    author: user,
    context: message
  });
  return newData.map(item => normalize(item, notification));
};
