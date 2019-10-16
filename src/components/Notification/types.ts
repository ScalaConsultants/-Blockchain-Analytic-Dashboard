export interface Notifications {
  notifications: NotificationTypes
}

export interface NotificationTypes {
  errors?: NotificationMessage [];
  infos?: NotificationMessage [];
  successes?: NotificationMessage [];
}

export interface NotificationMessage {
  description?: string;
  id: string;
  type?: string;
}
