export const filterTypeSelected = (state) => {
  return state.get("filter");
};
export const getNotifications = (state) => {
  return state.get("notifications");
};
export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.get("messages");
  if (notifications){
	  const filtered = Object.values(notifications).filter(
          (value) => value["isRead"] === false);
    return filtered;
  }
  return notifications;
};
