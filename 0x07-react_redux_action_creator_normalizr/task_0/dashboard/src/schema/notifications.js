import * as data from './notifications.json';
export const getAllNotificationsByUser = (userId) => {
  return data.default
        .filter((item) => item.author.id === userId)
        .map(item => item.context);
};
