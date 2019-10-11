export interface Notifications {
  notifications: NotificationTypes
}

export interface NotificationTypes {
  errors?: NotificationMessage [];
  warnings?: NotificationMessage [];
}

export interface NotificationMessage {
  description?: string;
  id: string;
  type?: string;
}


export interface testWTF {
  errors: string;
  warnings?: string;
}
